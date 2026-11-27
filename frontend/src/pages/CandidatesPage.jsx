import { useState } from 'react';
import CandidateProfileModal from '../components/CandidateProfileModal.jsx';
import CandidateResumeModal from '../components/CandidateResumeModal.jsx';
import EmptyState from '../components/EmptyState.jsx';
import { displayApplicationStatus } from '../utils/applicationStatus.js';
import { useAppData } from '../hooks/useAppData.js';
import { useToast } from '../hooks/useToast.js';
import { api } from '../services/api.js';

export default function CandidatesPage() {
  const { applications, loading, error, refresh } = useAppData();
  const toast = useToast();
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedResume, setSelectedResume] = useState(null);

  const updateStatus = async (id, status) => {
    try {
      await api.updateApplication(id, status);
      toast('Status atualizado.');
      refresh();
    } catch (updateError) {
      toast(updateError.message);
    }
  };

  return (
    <>
      <div className="welcome">
        <div><h1 className="h1">Candidatos</h1><p className="sub">Candidaturas recebidas para suas oportunidades.</p></div>
      </div>
      {error && <p className="error" role="alert">{error}</p>}
      {loading && applications.length === 0
        ? <p className="muted">Carregando candidaturas…</p>
        : (
          <div className="list">
            {applications.map((application) => (
              <div className="list-row" data-application-id={application.id} key={application.id}>
                <div>
                  <strong>{application.user?.name || 'Estudante'} · {application.opportunity?.title || ''}</strong>
                  <small>{application.user?.email || ''} · {application.user?.profile?.education || 'Formação não informada'}</small>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
                    <button className="btn btn-primary" type="button" data-resume={application.id} onClick={() => setSelectedResume(application)}>
                      Ver currículo
                    </button>
                    <button className="btn" type="button" data-profile={application.id} onClick={() => setSelectedProfile(application)}>
                      Ver perfil
                    </button>
                  </div>
                </div>
                <select
                  aria-label={`Status de ${application.user?.name || 'candidato'}`}
                  data-status={application.id}
                  style={{ width: 'auto' }}
                  value={displayApplicationStatus(application.status)}
                  onChange={(event) => updateStatus(application.id, event.target.value)}
                >
                  <option value="Em análise">Em análise</option>
                  <option value="Aprovada">Aprovada</option>
                  <option value="Recusada">Recusada</option>
                </select>
              </div>
            ))}
            {!applications.length && <EmptyState>Ainda não há candidaturas.</EmptyState>}
          </div>
        )}
      {selectedProfile && <CandidateProfileModal application={selectedProfile} onClose={() => setSelectedProfile(null)} />}
      {selectedResume && <CandidateResumeModal application={selectedResume} onClose={() => setSelectedResume(null)} />}
    </>
  );
}
