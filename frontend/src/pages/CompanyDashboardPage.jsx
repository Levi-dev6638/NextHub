import { useNavigate } from 'react-router-dom';
import EmptyState from '../components/EmptyState.jsx';
import OpportunityCard from '../components/OpportunityCard.jsx';
import OpportunityDetailModal from '../components/OpportunityDetailModal.jsx';
import { useAppData } from '../hooks/useAppData.js';
import { useAuth } from '../hooks/useAuth.js';
import { useToast } from '../hooks/useToast.js';
import { displayApplicationStatus } from '../utils/applicationStatus.js';
import { useState } from 'react';
import { api } from '../services/api.js';

export default function CompanyDashboardPage() {
  const { user } = useAuth();
  const { opportunities, applications, loading, error, refresh } = useAppData();
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const toast = useToast();
  const owned = opportunities.filter((opportunity) => opportunity.ownerId === user.id);
  const pending = applications.filter((application) => displayApplicationStatus(application.status) === 'Em análise').length;

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
          <div className="eyebrow">ÁREA DA EMPRESA</div>
          <h1 className="h1">Bem-vindo, {user.name.split(' ')[0]}</h1>
          <p className="sub">Acompanhe sua atividade e encontre talentos.</p>
        </div>
      </div>
      <div className="stats">
        <div className="stat"><div className="stat-label">Oportunidades publicadas</div><div className="stat-num">{owned.length}</div></div>
        <div className="stat"><div className="stat-label">Candidaturas recebidas</div><div className="stat-num">{applications.length}</div></div>
        <div className="stat"><div className="stat-label">Pendentes</div><div className="stat-num">{pending}</div></div>
      </div>
      <div className="section-head">
        <div><h2>Atividade recente</h2><p>Gerencie suas oportunidades e acompanhe candidatos.</p></div>
        <button className="btn btn-primary" data-go="publicar" type="button" onClick={() => navigate('/publicar')}>
          ＋ Publicar oportunidade
        </button>
      </div>
      {error && <p className="error" role="alert">{error}</p>}
      {loading && opportunities.length === 0
        ? <p className="muted">Carregando oportunidades…</p>
        : (
          <div className="grid">
            {owned.map((opportunity) => (
              <OpportunityCard
                key={opportunity.id}
                opportunity={opportunity}
                role="company"
                onDetail={(id) => setSelected(opportunities.find((item) => item.id === id))}
              />
            ))}
            {!owned.length && <EmptyState>Publique sua primeira oportunidade.</EmptyState>}
          </div>
        )}
      {selected && (
        <OpportunityDetailModal
          opportunity={selected}
          role="company"
          isOwner
          onClose={() => setSelected(null)}
          onEdit={(id) => navigate('/publicar', { state: { editingId: id } })}
          onCloseOpportunity={closeOpportunity}
        />
      )}
    </>
  );
}
