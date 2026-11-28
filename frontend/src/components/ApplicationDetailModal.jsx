import Modal from './Modal.jsx';
import { StatusBadge } from './StatusBadge.jsx';
import { displayApplicationStatus } from '../utils/applicationStatus.js';

export default function ApplicationDetailModal({ application, onClose, onWithdraw }) {
  if (!application) return null;
  const opportunity = application.opportunity || {};

  return (
    <Modal
      header={(
        <>
          <StatusBadge>{opportunity.type || 'Oportunidade'}</StatusBadge>
          <h2>{opportunity.title || 'Candidatura'}</h2>
          <div className="company">{opportunity.company || ''} · {opportunity.location || opportunity.format || ''}</div>
        </>
      )}
      closeButtonId="close"
      onClose={onClose}
    >
      <section>
        <h3>Andamento da candidatura</h3>
        <p>Status atual: <b>{displayApplicationStatus(application.status)}</b></p>
        <p className="muted">Candidatura registrada em {new Date(application.createdAt).toLocaleString('pt-BR')}</p>
      </section>
      <section><h3>Descrição</h3><p>{opportunity.description || ''}</p></section>
      {opportunity.requirements && <section><h3>Requisitos</h3><p className="muted">{opportunity.requirements}</p></section>}
      {opportunity.responsibilities && <section><h3>Responsabilidades</h3><p className="muted">{opportunity.responsibilities}</p></section>}
      <div className="tags">
        {opportunity.format && <span className="tag">{opportunity.format}</span>}
        {opportunity.subject && <span className="tag">{opportunity.subject}</span>}
        {opportunity.deadline && <span className="tag">Prazo: {opportunity.deadline}</span>}
      </div>
      <div className="form-actions">
        <button className="btn btn-danger" type="button" data-remove-application={application.id} onClick={() => onWithdraw(application.id)}>
          Retirar candidatura
        </button>
      </div>
    </Modal>
  );
}
