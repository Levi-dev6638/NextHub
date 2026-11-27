import { useState } from 'react';
import ApplicationDetailModal from '../components/ApplicationDetailModal.jsx';
import EmptyState from '../components/EmptyState.jsx';
import OpportunityCard from '../components/OpportunityCard.jsx';
import OpportunityDetailModal from '../components/OpportunityDetailModal.jsx';
import { useAppData } from '../hooks/useAppData.js';
import { useToast } from '../hooks/useToast.js';
import useOpportunityActions from '../hooks/useOpportunityActions.js';
import { api } from '../services/api.js';

export default function ApplicationsPage() {
  const { applications, favorites, loading, error, refresh } = useAppData();
  const { apply, toggleFavorite } = useOpportunityActions();
  const toast = useToast();
  const [favoritesTab, setFavoritesTab] = useState(false);
  const [selected, setSelected] = useState(null);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const rows = applications
    .map((application) => ({ ...application.opportunity, application }))
    .filter((opportunity) => opportunity.id);

  const withdraw = async (id) => {
    if (!window.confirm('Deseja retirar sua candidatura?')) return;
    try {
      await api.withdrawApplication(id);
      setSelected(null);
      toast('Candidatura retirada.');
      refresh();
    } catch (withdrawError) {
      toast(withdrawError.message);
    }
  };

  return (
    <>
      <div className="welcome">
        <div><h1 className="h1">Candidaturas</h1><p className="sub">Acompanhe seus processos e oportunidades salvas.</p></div>
      </div>
      <div className="tabs">
        <button className={`tab${!favoritesTab ? ' active' : ''}`} type="button" data-tab="apps" onClick={() => setFavoritesTab(false)}>
          Minhas candidaturas ({applications.length})
        </button>
        <button className={`tab${favoritesTab ? ' active' : ''}`} type="button" data-tab="favorites" onClick={() => setFavoritesTab(true)}>
          Favoritos ({favorites.length})
        </button>
      </div>
      {error && <p className="error" role="alert">{error}</p>}
      {loading && applications.length === 0 && favorites.length === 0
        ? <p className="muted">Carregando candidaturas…</p>
        : (
          <div className="grid">
            {favoritesTab
              ? favorites.map((opportunity) => (
                <OpportunityCard
                  key={opportunity.id}
                  opportunity={opportunity}
                  favoriteView
                  application={applications.find((item) => item.opportunityId === opportunity.id)}
                  onFavorite={toggleFavorite}
                  onDetail={(id) => setSelectedOpportunity(favorites.find((item) => item.id === id))}
                  onApply={apply}
                  onViewApplication={(id) => setSelected(applications.find((item) => item.id === id))}
                />
              ))
              : rows.map((opportunity) => (
                <OpportunityCard
                  key={opportunity.application.id}
                  opportunity={opportunity}
                  role="student"
                  applicationView
                  favorite={favorites.some((item) => item.id === opportunity.id)}
                  application={opportunity.application}
                  onFavorite={toggleFavorite}
                  onViewApplication={(id) => setSelected(applications.find((item) => item.id === id))}
                />
              ))}
            {!favoritesTab && !rows.length && <EmptyState>Você ainda não se candidatou.</EmptyState>}
            {favoritesTab && !favorites.length && <EmptyState>Você ainda não salvou oportunidades.</EmptyState>}
          </div>
        )}
      {selected && (
        <ApplicationDetailModal
          application={selected}
          onClose={() => setSelected(null)}
          onWithdraw={withdraw}
        />
      )}
      {selectedOpportunity && (
        <OpportunityDetailModal
          opportunity={selectedOpportunity}
          role="student"
          isFavorite={favorites.some((item) => item.id === selectedOpportunity.id)}
          alreadyApplied={applications.some((application) => application.opportunityId === selectedOpportunity.id)}
          onClose={() => setSelectedOpportunity(null)}
          onFavorite={toggleFavorite}
          onApply={apply}
        />
      )}
    </>
  );
}
