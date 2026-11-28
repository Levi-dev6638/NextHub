import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmptyState from '../components/EmptyState.jsx';
import OpportunityCard from '../components/OpportunityCard.jsx';
import OpportunityDetailModal from '../components/OpportunityDetailModal.jsx';
import { useAppData } from '../hooks/useAppData.js';
import { useAuth } from '../hooks/useAuth.js';
import { useToast } from '../hooks/useToast.js';
import useOpportunityActions from '../hooks/useOpportunityActions.js';
import { api } from '../services/api.js';
import { OPPORTUNITY_AREAS } from '../utils/opportunityAreas.js';

function getRecommendations(opportunities, user) {
  const profile = user.profile || {};
  const interests = (profile.interests || '').toLocaleLowerCase('pt-BR').split(/[,;]+/)
    .map((area) => area.trim()).filter((area) => OPPORTUNITY_AREAS.some(
      (option) => option.toLocaleLowerCase('pt-BR') === area,
    ));
  const courseTerms = (profile.courses || []).map((course) => (course.name || '').toLocaleLowerCase('pt-BR'))
    .map((term) => term.trim()).filter((term) => term.length > 2);

  return opportunities.map((opportunity) => {
    const text = [
      opportunity.title,
      opportunity.area,
      opportunity.subject,
      opportunity.description,
    ].join(' ').toLocaleLowerCase('pt-BR');
    const areaMatch = interests.find((area) => (
      area === (opportunity.area || '').toLocaleLowerCase('pt-BR')
    ));
    const courseMatch = courseTerms.find((term) => text.includes(term));
    const match = areaMatch ? opportunity.area : courseMatch;
    const format = profile.format && opportunity.format
      && profile.format.toLocaleLowerCase('pt-BR') === opportunity.format.toLocaleLowerCase('pt-BR');
    return { opportunity, match, format, score: (match ? 2 : 0) + (format ? 1 : 0) };
  }).filter((item) => item.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, 3)
    .map(({ opportunity, match, format }) => ({
      ...opportunity,
      recommendation: `Combina com ${match || 'seus interesses'}${format ? ` e formato ${opportunity.format.toLocaleLowerCase('pt-BR')}` : ''}.`,
    }));
}

function filterLocally(items, filters) {
  const query = filters.q.toLocaleLowerCase('pt-BR');
  return items.filter((opportunity) => (
    (!query || [opportunity.title, opportunity.company, opportunity.subject, opportunity.area, opportunity.description]
      .join(' ').toLocaleLowerCase('pt-BR').includes(query))
    && (!filters.type || opportunity.type === filters.type)
    && (!filters.format || opportunity.format === filters.format)
    && (!filters.area || opportunity.area === filters.area)
  ));
}

export default function MuralPage() {
  const { user } = useAuth();
  const { opportunities, favorites, applications, loading, error, refresh } = useAppData();
  const { apply, toggleFavorite } = useOpportunityActions();
  const navigate = useNavigate();
  const toast = useToast();
  const [filters, setFilters] = useState({ q: '', type: '', format: '', area: '' });
  const [searchResults, setSearchResults] = useState(null);
  const [searchError, setSearchError] = useState('');
  const [selected, setSelected] = useState(null);
  const [applied, setApplied] = useState(false);

  const recommendations = useMemo(() => getRecommendations(opportunities, user), [opportunities, user]);
  const visibleOpportunities = searchResults || filterLocally(opportunities, filters);

  const updateFilter = (event) => {
    setFilters((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const search = async (event) => {
    event.preventDefault();
    setSearchError('');
    try {
      setSearchResults(await api.opportunities(filters));
    } catch (requestError) {
      setSearchError(requestError.message);
    }
  };

  const clearFilters = () => {
    setFilters({ q: '', type: '', format: '', area: '' });
    setSearchResults(null);
    setSearchError('');
  };

  const detail = (id) => {
    setSelected(opportunities.find((opportunity) => opportunity.id === id) || null);
    setApplied(false);
  };

  const handleApply = async (id) => {
    await apply(id);
    setApplied(true);
  };

  const closeOpportunity = async (id) => {
    if (!window.confirm('Deseja encerrar esta oportunidade?')) return;
    try {
      await api.closeOpportunity(id);
      setSelected(null);
      toast('Oportunidade encerrada.');
      refresh();
    } catch (closeError) {
      toast(closeError.message);
    }
  };

  return (
    <>
      <div className="welcome">
        <div>
          <div className="eyebrow">
            {new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date())}
          </div>
          <h1 className="h1">Olá, {user.name.split(' ')[0]} 👋</h1>
          <p className="sub">Encontre oportunidades que combinam com o seu próximo passo.</p>
        </div>
      </div>
      <div className="stats">
        <div className="stat"><div className="stat-label">Oportunidades disponíveis</div><div className="stat-num">{opportunities.length}</div></div>
        <div className="stat"><div className="stat-label">Minhas candidaturas</div><div className="stat-num">{applications.length}</div></div>
        <div className="stat"><div className="stat-label">Itens salvos</div><div className="stat-num">{favorites.length}</div></div>
      </div>
      <form className="panel toolbar" onSubmit={search}>
        <div className="search-row">
          <div className="search-wrap">
            <input
              name="q"
              placeholder="Cargo, empresa, curso ou assunto"
              value={filters.q}
              onChange={updateFilter}
            />
          </div>
          <button className="btn btn-primary" type="submit">Buscar oportunidades</button>
        </div>
        <div className="filters">
          <select aria-label="Tipo de oportunidade" name="type" value={filters.type} onChange={updateFilter}>
            <option value="">Todos os tipos</option>
            {['Estágio', 'Jovem Aprendiz', 'Curso', 'Freelancer', 'Evento'].map((value) => <option key={value}>{value}</option>)}
          </select>
          <select aria-label="Formato" name="format" value={filters.format} onChange={updateFilter}>
            <option value="">Todos os formatos</option>
            {['Remoto', 'Híbrido', 'Presencial'].map((value) => <option key={value}>{value}</option>)}
          </select>
          <select aria-label="Área" name="area" value={filters.area} onChange={updateFilter}>
            <option value="">Todas as áreas</option>
            {OPPORTUNITY_AREAS.map((value) => <option key={value}>{value}</option>)}
          </select>
          <button className="btn" type="button" onClick={clearFilters}>Limpar filtros</button>
        </div>
      </form>

      <div className="section-head">
        <div>
          <h2>Recomendadas para você</h2>
          <p>Oportunidades alinhadas aos seus interesses e preferências</p>
        </div>
      </div>
      <div className="grid">
        {recommendations.length
          ? recommendations.map((opportunity) => (
            <OpportunityCard
              key={`recommend-${opportunity.id}`}
              opportunity={{ ...opportunity, description: opportunity.recommendation }}
              role="student"
              favorite={favorites.some((item) => item.id === opportunity.id)}
              onFavorite={toggleFavorite}
              onDetail={detail}
            />
          ))
          : <EmptyState>Preencha seus interesses no perfil para receber recomendações.</EmptyState>}
      </div>

      <div className="section-head">
        <div>
          <h2>Todas as oportunidades</h2>
          <p>{visibleOpportunities.length} oportunidades para explorar</p>
        </div>
      </div>
      {searchError && <p className="error" role="alert">{searchError}</p>}
      {error && <p className="error" role="alert">{error}</p>}
      {loading && opportunities.length === 0
        ? <p className="muted">Carregando oportunidades…</p>
        : (
          <div className="grid">
            {visibleOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.id}
                opportunity={opportunity}
                role="student"
                favorite={favorites.some((item) => item.id === opportunity.id)}
                onFavorite={toggleFavorite}
                onDetail={detail}
              />
            ))}
            {!visibleOpportunities.length && <EmptyState>Nenhuma oportunidade encontrada.</EmptyState>}
          </div>
        )}

      {selected && (
        <OpportunityDetailModal
          opportunity={selected}
          role="student"
          isFavorite={favorites.some((item) => item.id === selected.id)}
          alreadyApplied={applied || applications.some((application) => application.opportunityId === selected.id)}
          onClose={() => setSelected(null)}
          onFavorite={toggleFavorite}
          onApply={handleApply}
          onEdit={(id) => navigate('/publicar', { state: { editingId: id } })}
          onCloseOpportunity={closeOpportunity}
        />
      )}
    </>
  );
}
