import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthCard from '../components/AuthCard.jsx';
import { useAuth } from '../hooks/useAuth.js';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setError('');
    const formData = new FormData(event.currentTarget);
    try {
      const user = await login({
        email: formData.get('email'),
        password: formData.get('password'),
      });
      navigate(user.role === 'student' ? '/mural' : '/painel', { replace: true });
    } catch (loginError) {
      setError(loginError.message);
    }
  };

  return (
    <AuthCard
      title="Seu próximo passo começa aqui."
      description="Entre para explorar oportunidades ou conectar talentos."
    >
      <form className="stack" id="login" onSubmit={submit}>
        <label>
          <span className="label">E-mail</span>
          <input name="email" type="email" required placeholder="voce@email.com" />
        </label>
        <label>
          <span className="label">Senha</span>
          <input name="password" type={showPassword ? 'text' : 'password'} required />
          <button
            className="text-btn password-eye"
            type="button"
            onClick={() => setShowPassword((value) => !value)}
          >
            {showPassword ? 'Ocultar senha' : 'Mostrar senha'}
          </button>
        </label>
        <div className="error" role="alert">{error}</div>
        <button className="btn btn-primary" type="submit">Entrar</button>
        <button className="btn" id="register" type="button" onClick={() => navigate('/register')}>
          Criar conta
        </button>
      </form>
      <div className="demo">
        <b>Contas para demonstração</b><br />
        Estudante: ana@nexthub.demo / demo1234<br />
        Empresa: talentos@nexthub.demo / demo1234
      </div>
    </AuthCard>
  );
}
