import { HashRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import AppShell from './components/AppShell.jsx';
import { AppDataProvider } from './contexts/AppDataContext.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { ToastProvider } from './contexts/ToastContext.jsx';
import { useAuth } from './hooks/useAuth.js';
import ApplicationsPage from './pages/ApplicationsPage.jsx';
import CandidatesPage from './pages/CandidatesPage.jsx';
import CompanyDashboardPage from './pages/CompanyDashboardPage.jsx';
import CompanyOpportunitiesPage from './pages/CompanyOpportunitiesPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import MuralPage from './pages/MuralPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import PublishOpportunityPage from './pages/PublishOpportunityPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';

function SessionLoading() {
  return null;
}

function HomeRoute() {
  const { user, loading, sessionError, refreshSession } = useAuth();
  if (loading) return <SessionLoading />;
  if (sessionError) {
    return (
      <main className="login-bg">
        <div className="login-card">
          <h1>Não foi possível conectar</h1>
          <p className="error" role="alert">{sessionError}</p>
          <button className="btn btn-primary" type="button" onClick={refreshSession}>Tentar novamente</button>
        </div>
      </main>
    );
  }
  return <Navigate to={user ? (user.role === 'student' ? '/mural' : '/painel') : '/login'} replace />;
}

function GuestRoute() {
  const { user, loading } = useAuth();
  if (loading) return <SessionLoading />;
  if (user) return <Navigate to={user.role === 'student' ? '/mural' : '/painel'} replace />;
  return <Outlet />;
}

function ProtectedLayout() {
  const { user, loading } = useAuth();
  if (loading) return <SessionLoading />;
  if (!user) return <Navigate to="/login" replace />;
  return (
    <AppDataProvider>
      <AppShell />
    </AppDataProvider>
  );
}

function RoleRoute({ role, children }) {
  const { user } = useAuth();
  if (user.role !== role) return <Navigate to={user.role === 'student' ? '/mural' : '/painel'} replace />;
  return children;
}

export default function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <ToastProvider>
          <ThemeProvider>
            <Routes>
              <Route path="/" element={<HomeRoute />} />
              <Route element={<GuestRoute />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Route>
              <Route element={<ProtectedLayout />}>
                <Route path="/mural" element={<RoleRoute role="student"><MuralPage /></RoleRoute>} />
                <Route path="/painel" element={<RoleRoute role="company"><CompanyDashboardPage /></RoleRoute>} />
                <Route path="/candidaturas" element={<RoleRoute role="student"><ApplicationsPage /></RoleRoute>} />
                <Route path="/perfil" element={<RoleRoute role="student"><ProfilePage /></RoleRoute>} />
                <Route path="/config" element={<SettingsPage />} />
                <Route path="/publicar" element={<RoleRoute role="company"><PublishOpportunityPage /></RoleRoute>} />
                <Route path="/minhas-oportunidades" element={<RoleRoute role="company"><CompanyOpportunitiesPage /></RoleRoute>} />
                <Route path="/candidatos" element={<RoleRoute role="company"><CandidatesPage /></RoleRoute>} />
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </ThemeProvider>
        </ToastProvider>
      </AuthProvider>
    </HashRouter>
  );
}
