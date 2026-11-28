import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';
import { useTheme } from '../hooks/useTheme.js';
import { useToast } from '../hooks/useToast.js';

export default function SettingsPage() {
  const { user, logout } = useAuth();
  const { dark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const toast = useToast();

  const signOut = async () => {
    try {
      await logout();
      navigate('/login', { replace: true });
    } catch (error) {
      toast(error.message);
    }
  };

  return (
    <>
      <div className="welcome"><div><h1 className="h1">Configurações</h1><p className="sub">Gerencie sua conta e suas preferências.</p></div></div>
      <div className="panel" style={{ maxWidth: 720 }}>
        <h2>Preferências</h2>
        <div className="list-row">
          <div><strong>Aparência</strong><small>Escolha o tema da plataforma</small></div>
          <button className="btn" id="theme2" type="button" onClick={toggleTheme}>
            {dark ? '☀ Tema claro' : '☾ Tema escuro'}
          </button>
        </div>
        <div className="list-row">
          <div><strong>Conta</strong><small>{user.name} · {user.email}</small></div>
          <span className="badge">{user.role === 'student' ? 'Estudante' : 'Empresa'}</span>
        </div>
        <div className="form-actions"><button className="btn" id="logout" type="button" onClick={signOut}>Sair da conta</button></div>
      </div>
    </>
  );
}
