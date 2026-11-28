import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppData } from '../hooks/useAppData.js';
import { useToast } from '../hooks/useToast.js';
import { api } from '../services/api.js';
import { OPPORTUNITY_AREAS } from '../utils/opportunityAreas.js';

const emptyForm = {
  type: 'Estágio',
  title: '',
  company: '',
  area: 'Tecnologia',
  subject: '',
  format: 'Remoto',
  deadline: '',
  hours: '',
  location: '',
  link: '',
  description: '',
  requirements: '',
  responsibilities: '',
  internal: true,
};

function opportunityForm(opportunity) {
  return {
    type: opportunity.type || emptyForm.type,
    title: opportunity.title || '',
    company: opportunity.company || '',
    area: opportunity.area || emptyForm.area,
    subject: opportunity.subject || '',
    format: opportunity.format || emptyForm.format,
    deadline: opportunity.deadline || '',
    hours: opportunity.hours || '',
    location: opportunity.location || '',
    link: opportunity.link || '',
    description: opportunity.description || '',
    requirements: opportunity.requirements || '',
    responsibilities: opportunity.responsibilities || '',
    internal: Boolean(opportunity.internal),
  };
}

export default function PublishOpportunityPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();
  const { opportunities, refresh } = useAppData();
  const editingId = location.state?.editingId || '';
  const editingOpportunity = opportunities.find((item) => item.id === editingId);
  const formKey = `${editingId || 'new'}:${editingOpportunity ? editingId : ''}`;
  const initialForm = editingOpportunity ? opportunityForm(editingOpportunity) : emptyForm;
  const [formState, setFormState] = useState({ key: '', value: { ...emptyForm } });
  const form = formState.key === formKey ? formState.value : initialForm;
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const update = (event) => {
    const { name, value, checked, type } = event.target;
    setFormState((current) => ({
      key: formKey,
      value: {
        ...(current.key === formKey ? current.value : initialForm),
        [name]: type === 'checkbox' ? checked : value,
      },
    }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      if (editingId) {
        await api.updateOpportunity(editingId, form);
        toast('Oportunidade atualizada.');
      } else {
        await api.createOpportunity(form);
        toast('Oportunidade publicada.');
      }
      refresh();
      navigate('/minhas-oportunidades');
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="welcome">
        <div>
          <h1 className="h1">{editingId ? 'Editar oportunidade' : 'Publicar oportunidade'}</h1>
          <p className="sub">Compartilhe uma vaga, curso ou evento com novos talentos.</p>
        </div>
      </div>
      <form className="panel" id="pub" onSubmit={submit}>
        <div className="form-grid">
          <label><span className="label">Tipo de oportunidade *</span>
            <select name="type" required value={form.type} onChange={update}>
              {['Estágio', 'Jovem Aprendiz', 'Curso', 'Freelancer', 'Evento'].map((value) => <option key={value}>{value}</option>)}
            </select>
          </label>
          <label><span className="label">Título *</span><input name="title" value={form.title} onChange={update} required /></label>
          <label><span className="label">Empresa ou instituição</span><input name="company" value={form.company} onChange={update} /></label>
          <label><span className="label">Área de atuação</span>
            <select name="area" value={form.area} onChange={update}>
              {OPPORTUNITY_AREAS.map((value) => <option key={value}>{value}</option>)}
            </select>
          </label>
          <label><span className="label">Assunto</span><input name="subject" placeholder="Ex.: Desenvolvimento web" value={form.subject} onChange={update} /></label>
          <label><span className="label">Formato</span>
            <select name="format" value={form.format} onChange={update}>
              {['Remoto', 'Híbrido', 'Presencial'].map((value) => <option key={value}>{value}</option>)}
            </select>
          </label>
          <label><span className="label">Prazo de inscrição</span><input name="deadline" type="date" value={form.deadline || ''} onChange={update} /></label>
          <label><span className="label">Carga horária</span><input name="hours" placeholder="Ex.: 30 horas semanais" value={form.hours || ''} onChange={update} /></label>
          <label><span className="label">Localização</span><input name="location" placeholder="Cidade ou remoto" value={form.location || ''} onChange={update} /></label>
          <label><span className="label">Link ou contato</span><input name="link" type="url" placeholder="https://" value={form.link || ''} onChange={update} /></label>
          <label className="full"><span className="label">Descrição *</span><textarea name="description" rows="4" value={form.description} onChange={update} required /></label>
          <label className="full"><span className="label">Requisitos</span><textarea name="requirements" rows="3" value={form.requirements || ''} onChange={update} /></label>
          <label className="full"><span className="label">Responsabilidades</span><textarea name="responsibilities" rows="3" value={form.responsibilities || ''} onChange={update} /></label>
          <label className="full">
            <input name="internal" type="checkbox" checked={form.internal} onChange={update} style={{ width: 'auto', marginRight: 8 }} />
            Receber candidaturas diretamente pelo NextHub
          </label>
        </div>
        {error && <p className="error" role="alert">{error}</p>}
        <div className="form-actions">
          <button className="btn" type="button" data-go="painel" onClick={() => navigate('/painel')}>Cancelar</button>
          <button className="btn btn-primary" type="submit" disabled={submitting}>
            {submitting ? 'Salvando…' : editingId ? 'Salvar alterações' : 'Publicar oportunidade'}
          </button>
        </div>
      </form>
    </>
  );
}
