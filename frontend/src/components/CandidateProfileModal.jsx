import Modal from './Modal.jsx';

export default function CandidateProfileModal({ application, onClose, onViewResume }) {
  if (!application) return null;
  const user = application.user || {};
  const profile = user.profile || {};
  const courses = Array.isArray(profile.courses) ? profile.courses : [];
  const fields = [
    ['E-mail', user.email],
    ['Telefone', profile.phone],
    ['Instituição de ensino', profile.institution],
    ['Interesses', profile.interests],
    ['Formato de trabalho', profile.format],
    ['Currículo enviado', profile.resumeName],
  ].filter(([, value]) => typeof value === 'string' && value.trim());

  return (
    <Modal
      id="candidate-profile"
      header={(
        <>
          {profile.photo && (
            <img
              style={{ width: 56, height: 56, objectFit: 'cover', borderRadius: '50%' }}
              src={profile.photo}
              alt={`Foto de ${user.name || 'candidato'}`}
            />
          )}
          <h2>{user.name || 'Candidato'}</h2>
        </>
      )}
      onClose={onClose}
    >
      {fields.length > 0 && (
        <div className="list">
          {fields.map(([label, value]) => (
            <div className="list-row" key={label}>
              <div><strong>{label}</strong><small>{value}</small></div>
            </div>
          ))}
        </div>
      )}
      {courses.length > 0 && (
        <section>
          <h3>Cursos</h3>
          <div className="list">
            {courses.map((course, index) => (
              <div className="list-row" key={`${course.name}-${index}`}>
                <div><strong>{course.name}</strong><small>{course.institution} · {course.hours} horas</small></div>
              </div>
            ))}
          </div>
        </section>
      )}
      <div className="form-actions">
        <button className="btn btn-primary" type="button" data-resume={application.id} onClick={onViewResume}>
          Ver currículo
        </button>
      </div>
    </Modal>
  );
}
