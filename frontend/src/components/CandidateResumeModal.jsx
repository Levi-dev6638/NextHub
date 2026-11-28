import Modal from './Modal.jsx';

export default function CandidateResumeModal({ application, onClose }) {
  if (!application) return null;
  const user = application.user || {};
  const resumePath = user.profile?.resume || application.resumePath;

  return (
    <Modal
      id="candidate-resume"
      className="resume-modal"
      header={(
        <>
          <h2>Currículo de {user.name || 'Candidato'}</h2>
          <div className="company">{application.opportunity?.title || 'Candidatura'}</div>
        </>
      )}
      onClose={onClose}
    >
      {resumePath
        ? <iframe style={{ width: '100%', height: 'min(70vh, 850px)', border: 0 }} title={`Currículo de ${user.name || 'candidato'}`} src={resumePath} />
        : <p className="muted">Este candidato ainda não enviou um currículo.</p>}
    </Modal>
  );
}
