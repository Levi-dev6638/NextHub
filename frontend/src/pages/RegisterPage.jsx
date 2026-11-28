import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthCard from '../components/AuthCard.jsx';
import { useAuth } from '../hooks/useAuth.js';

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    setError('');
    const details = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const user = await register(details);
      navigate(user.role === 'student' ? '/mural' : '/painel', { replace: true });
    } catch (registrationError) {
      setError(registrationError.message);
    }
  };

  return (
    <AuthCard title="Crie sua conta" description="Escolha seu perfil para começar.">
      <form className="stack" id="login" onSubmit={submit}>
        <label>
          <span className="label">Perfil</span>
          <select name="role" defaultValue="student">
            <option value="student">Estudante</option>
            <option value="company">Empresa</option>
          </select>
        </label>
        <label>
          <span className="label">Nome</span>
          <input name="name" required />
        </label>
        <label>
          <span className="label">E-mail</span>
          <input name="email" type="email" required />
        </label>
        <label>
          <span className="label">Senha (mínimo 8 caracteres)</span>
          <input name="password" type="password" minLength="8" required />
        </label>
        <div className="error" role="alert">{error}</div>
        <button className="btn btn-primary" type="submit">Criar conta</button>
        <button className="btn" type="button" onClick={() => navigate('/login')}>
          Voltar ao login
        </button>
      </form>
    </AuthCard>
  );
}
