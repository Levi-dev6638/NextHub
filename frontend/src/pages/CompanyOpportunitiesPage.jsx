import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmptyState from '../components/EmptyState.jsx';
import OpportunityDetailModal from '../components/OpportunityDetailModal.jsx';
import { StatusBadge } from '../components/StatusBadge.jsx';
import { useAppData } from '../hooks/useAppData.js';
import { useAuth } from '../hooks/useAuth.js';
import { useToast } from '../hooks/useToast.js';
import { api } from '../services/api.js';

export default function CompanyOpportunitiesPage() {
  const { user } = useAuth();
  const { opportunities, applications, refresh, loading, error } = useAppData();
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const toast = useToast();
  const owned = opportunities.filter((opportunity) => opportunity.ownerId === user.id);

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
        <div><h1 className="h1">Minhas oportunidades</h1><p className="sub">Edite, encerre ou acompanhe suas publicações.</p></div>
        <button className="btn btn-primary" type="button" data-go="publicar" onClick={() => navigate('/publicar')}>＋ Publicar</button>
      </div>
      {error && <p className="error" role="alert">{error}</p>}
      {loading && !opportunities.length
        ? <p className="muted">Carregando oportunidades…</p>
        : (
          <div className="list">
            {owned.map((opportunity) => (
              <div className="list-row" key={opportunity.id}>
                <div>
                  <StatusBadge>{opportunity.type}</StatusBadge>
                  <strong style={{ marginTop: 6 }}>{opportunity.title}</strong>
                  <small>{opportunity.company} · {applications.filter((application) => application.opportunityId === opportunity.id).length} candidaturas</small>
                </div>
                <div><button className="text-btn" type="button" onClick={() => setSelected(opportunity)}>Ver</button></div>
              </div>
            ))}
            {!owned.length && <EmptyState>Você ainda não publicou oportunidades.</EmptyState>}
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
