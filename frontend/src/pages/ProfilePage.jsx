import { useState } from 'react';
import { useAuth } from '../hooks/useAuth.js';
import { useToast } from '../hooks/useToast.js';
import { api } from '../services/api.js';
import { OPPORTUNITY_AREAS } from '../utils/opportunityAreas.js';

function blankCourse() {
  return { name: '', institution: '', hours: '' };
}

export default function ProfilePage() {
  const { user, updateUser } = useAuth();
  const toast = useToast();
  const profile = user.profile || {};
  const [interest, setInterest] = useState(() => (
    (profile.interests || '').split(/[,;]+/)
      .map((area) => area.trim())
      .find((area) => OPPORTUNITY_AREAS.includes(area)) || ''
  ));
  const [courses, setCourses] = useState(() => (
    Array.isArray(profile.courses) ? profile.courses.map((course) => ({ ...course })) : []
  ));
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const completed = [user.name, user.email, profile.phone, profile.institution, profile.interests, profile.format, profile.resume]
    .filter((value) => typeof value === 'string' && value.trim()).length;
  const percentage = Math.round(completed / 7 * 100);

  const updateCourse = (index, field, value) => {
    setCourses((items) => items.map((course, itemIndex) => (
      itemIndex === index ? { ...course, [field]: value } : course
    )));
  };

  const removeCourse = (index) => {
    setCourses((items) => {
      const next = items.filter((_, itemIndex) => itemIndex !== index);
      return next.length ? next : [blankCourse()];
    });
  };

  const saveProfile = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError('');
    const values = Object.fromEntries(new FormData(event.currentTarget));
    const details = {
      phone: values.phone,
      institution: values.institution,
      interests: interest,
      format: values.format,
      courses: courses.map((course) => ({
        name: course.name.trim(),
        institution: course.institution.trim(),
        hours: String(course.hours || '').trim(),
      })).filter((course) => course.name || course.institution || course.hours),
    };
    try {
      const result = await api.updateProfile(details);
      updateUser(result.user);
      setCourses(result.user.profile.courses || []);
      toast('Perfil atualizado.');
    } catch (saveError) {
      setError(saveError.message);
    } finally {
      setSaving(false);
    }
  };

  const uploadResume = async (event) => {
    event.preventDefault();
    setError('');
    const file = event.currentTarget.elements.resume.files[0];
    if (!file) return;
    setUploading(true);
    try {
      const result = await api.uploadResume(file);
      updateUser(result.user);
      toast('Currículo enviado.');
    } catch (uploadError) {
      setError(uploadError.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <div className="welcome">
        <div><h1 className="h1">Meu perfil</h1><p className="sub">Ajude as empresas a conhecerem você melhor.</p></div>
      </div>
      {error && <p className="error" role="alert">{error}</p>}
      <div className="layout">
        <form className="panel" id="profile" onSubmit={saveProfile}>
          <h2>Informações acadêmicas</h2>
          <div className="notice">Perfil preenchido: {percentage}%</div>
          <div className="profile-progress"><span style={{ width: `${percentage}%` }} /></div>
          <div className="form-grid" style={{ marginTop: 18 }}>
            <label><span className="label">Nome</span><input value={user.name} disabled /></label>
            <label><span className="label">E-mail</span><input value={user.email} disabled /></label>
            <label><span className="label">Telefone</span><input name="phone" defaultValue={profile.phone || ''} /></label>
            <label><span className="label">Instituição</span><input name="institution" defaultValue={profile.institution || ''} /></label>
            <label><span className="label">Áreas de interesse</span>
              <select name="interests" value={interest} onChange={(event) => setInterest(event.target.value)}>
                <option value="">Selecione uma área</option>
                {OPPORTUNITY_AREAS.map((area) => <option key={area}>{area}</option>)}
              </select>
            </label>
            <label><span className="label">Formato desejado</span>
              <select name="format" defaultValue={profile.format || 'Remoto'}>
                {['Remoto', 'Híbrido', 'Presencial'].map((format) => <option key={format}>{format}</option>)}
              </select>
            </label>
          </div>
          <section style={{ marginTop: 20 }}>
            <h3>Cursos</h3>
            <p className="muted">Adicione cursos com instituição e carga horária.</p>
            <div id="course-list">
              {courses.map((course, index) => (
                <div
                  className="course-row"
                  key={index}
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 12, alignItems: 'end', border: '1px solid var(--border)', borderRadius: 9, padding: 13, marginBottom: 10 }}
                >
                  <label><span className="label">Nome do curso</span><input data-course-field="name" maxLength="160" value={course.name || ''} onChange={(event) => updateCourse(index, 'name', event.target.value)} /></label>
                  <label><span className="label">Instituição</span><input data-course-field="institution" maxLength="160" value={course.institution || ''} onChange={(event) => updateCourse(index, 'institution', event.target.value)} /></label>
                  <label><span className="label">Carga horária (horas)</span><input data-course-field="hours" type="number" min="1" max="10000" step="1" value={course.hours || ''} onChange={(event) => updateCourse(index, 'hours', event.target.value)} /></label>
                  <button className="btn" type="button" data-remove-course onClick={() => removeCourse(index)}>Remover curso</button>
                </div>
              ))}
            </div>
            <button className="btn" id="add-course" type="button" onClick={() => setCourses((items) => [...items, blankCourse()])}>
              ＋ Adicionar curso
            </button>
          </section>
          <div className="form-actions">
            <button className="btn btn-primary" type="submit" disabled={saving}>{saving ? 'Salvando…' : 'Salvar perfil'}</button>
          </div>
        </form>
        <div className="panel">
          <h3>Currículo</h3>
          <p className="muted">Envie seu currículo em PDF (até 5 MB).</p>
          {profile.resume && (
            <a className="btn" href={profile.resume} target="_blank" rel="noreferrer">
              Visualizar currículo: {profile.resumeName || 'PDF'}
            </a>
          )}
          <form id="resume" className="stack" style={{ marginTop: 18 }} onSubmit={uploadResume}>
            <input type="file" name="resume" accept="application/pdf,.pdf" required />
            <button className="btn btn-primary" type="submit" disabled={uploading}>
              {uploading ? 'Enviando…' : profile.resume ? 'Substituir' : 'Enviar'} currículo
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
