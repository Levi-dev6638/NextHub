import Modal from './Modal.jsx';
import { StatusBadge } from './StatusBadge.jsx';

export default function OpportunityDetailModal({
  opportunity,
  role,
  isFavorite,
  alreadyApplied,
  isOwner,
  onClose,
  onFavorite,
  onApply,
  onEdit,
  onCloseOpportunity,
}) {
  if (!opportunity) return null;
  const { id, type, title, company, location, format, description, requirements, responsibilities, subject, deadline } = opportunity;

  return (
    <Modal
      title={title}
      header={(
        <>
          <StatusBadge>{type}</StatusBadge>
          <h2>{title}</h2>
          <div className="company">{company} · {location || format || ''}</div>
        </>
      )}
      closeButtonId="close"
      onClose={onClose}
    >
      <section><p>{description}</p></section>
      {requirements && <section><h3>Requisitos</h3><p className="muted">{requirements}</p></section>}
      {responsibilities && <section><h3>Responsabilidades</h3><p className="muted">{responsibilities}</p></section>}
      <div className="tags">
        {format && <span className="tag">{format}</span>}
        {subject && <span className="tag">{subject}</span>}
        {deadline && <span className="tag">Prazo: {deadline}</span>}
      </div>
      <div className="form-actions">
        {role === 'student' && (
          <>
            <button className="btn" id="favdetail" type="button" onClick={() => onFavorite(id)}>
              {isFavorite ? '♥ Remover favorito' : '♡ Favoritar'}
            </button>
            <button
              className="btn btn-primary"
              id="apply"
              type="button"
              disabled={alreadyApplied}
              onClick={() => onApply(id)}
            >
              {alreadyApplied ? 'Você já se candidatou' : 'Candidatar-se'}
            </button>
          </>
        )}
        {role === 'company' && isOwner && (
          <>
            <button className="btn" type="button" data-edit-opportunity={id} onClick={() => onEdit(id)}>Editar</button>
            <button className="btn btn-danger" id="end-from-detail" type="button" onClick={() => onCloseOpportunity(id)}>
              Encerrar oportunidade
            </button>
          </>
        )}
      </div>
    </Modal>
  );
}
