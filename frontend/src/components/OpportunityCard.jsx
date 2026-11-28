import { StatusBadge } from './StatusBadge.jsx';

export default function OpportunityCard({
  opportunity,
  role,
  favorite = false,
  application,
  applicationView = false,
  favoriteView = false,
  onFavorite,
  onDetail,
  onApply,
  onViewApplication,
}) {
  const { id, type, title, company, location, format, description, subject, deadline, hours } = opportunity;
  const showApplication = Boolean(application);

  if (favoriteView) {
    return (
      <article className="card op-card">
        <div className="card-top">
          <StatusBadge>{type}</StatusBadge>
          {showApplication && <StatusBadge>{application.status === 'Enviada' ? 'Em análise' : application.status}</StatusBadge>}
          <button className="heart on" type="button" onClick={() => onFavorite(id)} aria-label="Remover dos favoritos">♥</button>
        </div>
        <h3>{title}</h3>
        <div className="company">{company || 'NextHub'} · {location || format || ''}</div>
        <p className="description">{description || ''}</p>
        <div className="tags">
          {format && <span className="tag">{format}</span>}
          {subject && <span className="tag">{subject}</span>}
        </div>
        <div className="card-foot" style={{ justifyContent: 'flex-end', gap: 8, flexWrap: 'wrap' }}>
          <button className="text-btn" type="button" onClick={() => (
            showApplication ? onViewApplication(application.id) : onDetail(id)
          )}>
            {showApplication ? 'Acessar candidatura' : 'Ver'}
          </button>
          {showApplication
            ? <button className="btn btn-primary" type="button" disabled>Você já se candidatou</button>
            : <button className="btn btn-primary" type="button" onClick={() => onApply(id)}>Candidatar-se</button>}
        </div>
      </article>
    );
  }

  if (applicationView && application) {
    const status = application.status === 'Enviada' ? 'Em análise' : application.status;
    return (
      <article className="card op-card">
        <div className="card-top">
          <StatusBadge>{type}</StatusBadge>
          <StatusBadge>{status}</StatusBadge>
          <button
            className={`heart${favorite ? ' on' : ''}`}
            type="button"
            onClick={() => onFavorite(id)}
            aria-label={favorite ? 'Remover dos favoritos' : 'Favoritar oportunidade'}
          >
            {favorite ? '♥' : '♡'}
          </button>
        </div>
        <h3>{title || 'Oportunidade'}</h3>
        <div className="company">{company || ''}</div>
        <p className="description">
          Candidatura registrada em {application.createdAt ? new Date(application.createdAt).toLocaleDateString('pt-BR') : ''}
        </p>
        <div className="tags"><span className="tag">Status: {status}</span></div>
        <div className="card-foot">
          <span className="muted">Acompanhe o andamento</span>
          <button className="text-btn" type="button" onClick={() => onViewApplication(application.id)}>Acessar candidatura</button>
        </div>
      </article>
    );
  }

  return (
    <article className="card op-card">
      <div className="card-top">
        <StatusBadge>{type}</StatusBadge>
        {showApplication && <StatusBadge>{application.status === 'Enviada' ? 'Em análise' : application.status}</StatusBadge>}
        {role === 'student' && (
          <button
            className={`heart${favorite ? ' on' : ''}`}
            type="button"
            onClick={() => onFavorite(id)}
            aria-label={favorite ? 'Remover dos favoritos' : 'Favoritar'}
          >
            {favorite ? '♥' : '♡'}
          </button>
        )}
      </div>
      <h3>{title || 'Oportunidade'}</h3>
      <div className="company">{company || 'NextHub'} · {location || format || ''}</div>
      <p className="description">{description || ''}</p>
      <div className="tags">
        {format && <span className="tag">{format}</span>}
        {subject && <span className="tag">{subject}</span>}
        {deadline && <span className="tag">Até {deadline}</span>}
      </div>
      <div className="card-foot">
        <span className="muted">{hours ? `${hours}h/semana` : 'Publicado recentemente'}</span>
        {showApplication
          ? <button className="text-btn" type="button" onClick={() => onViewApplication(application.id)}>Acessar candidatura</button>
          : <button className="text-btn" type="button" onClick={() => onDetail(id)}>Ver</button>}
      </div>
    </article>
  );
}
