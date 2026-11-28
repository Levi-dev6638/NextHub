import { useEffect, useMemo, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppData } from '../hooks/useAppData.js';
import { useAuth } from '../hooks/useAuth.js';
import EmptyState from './EmptyState.jsx';
import Modal from './Modal.jsx';

const icons = {
  Painel: '▦',
  Mural: '⌕',
  Candidaturas: '▤',
  Perfil: '◉',
  Configurações: '⚙',
  Oportunidades: '▣',
  Candidatos: '♙',
  'Publicar oportunidade': '＋',
};

const pageTitles = {
  mural: 'Mural de oportunidades',
  painel: 'Painel da empresa',
  publicar: 'Publicar oportunidade',
  'minhas-oportunidades': 'Minhas oportunidades',
  candidatos: 'Candidatos',
  candidaturas: 'Candidaturas',
  perfil: 'Meu perfil',
  config: 'Configurações',
};

function getMenu(role) {
  return role === 'student'
    ? [['Mural', '/mural', 'mural'], ['Candidaturas', '/candidaturas', 'candidaturas'], ['Perfil', '/perfil', 'perfil'], ['Configurações', '/config', 'config']]
    : [['Painel', '/painel', 'painel'], ['Publicar oportunidade', '/publicar', 'publicar'], ['Oportunidades', '/minhas-oportunidades', 'minhas-oportunidades'], ['Candidatos', '/candidatos', 'candidatos'], ['Configurações', '/config', 'config']];
}

function getNotificationItems(role, applications) {
  return role === 'company'
    ? applications.map((application) => ({
      key: `company:${application.id}`,
      id: application.id,
      title: 'Nova candidatura recebida',
      text: `${application.user?.name || 'Candidato'} se candidatou a ${application.opportunity?.title || 'uma oportunidade'}`,
    }))
    : applications
      .filter((application) => ['Aprovada', 'Recusada'].includes(application.status))
      .map((application) => ({
        key: `student:${application.id}:${application.status}`,
        id: application.id,
        title: 'Atualização de candidatura',
        text: `${application.opportunity?.title || 'Oportunidade'} — ${application.status}`,
      }));
}

function readNotificationIds(userId) {
  return new Set((localStorage.getItem(`nexthub-read-notifications:${userId}`) || '')
    .split('\n')
    .filter(Boolean));
}

function Notifications({ user, applications, onNavigate }) {
  const [open, setOpen] = useState(false);
  const items = useMemo(() => getNotificationItems(user.role, applications), [user.role, applications]);
  const readIds = readNotificationIds(user.id);
  const unread = items.some((item) => !readIds.has(item.key));

  const markReadAndOpen = (item) => {
    const updated = readNotificationIds(user.id);
    updated.add(item.key);
    localStorage.setItem(`nexthub-read-notifications:${user.id}`, [...updated].join('\n'));
    setOpen(false);
    onNavigate(user.role === 'company' ? '/candidatos' : '/candidaturas', item.id);
  };

  return (
    <>
      <button className="icon-btn" id="bell" title="Notificações" type="button" onClick={() => setOpen(true)}>
        ♧{unread && <i className="notification-dot" />}
      </button>
      {open && (
        <Modal
          id="notifications"
          title="Notificações"
          closeButtonId="close-notifications"
          onClose={() => setOpen(false)}
        >
          <div className="list">
            {items.filter((item) => !readIds.has(item.key)).map((item) => (
              <div className="list-row" key={item.key}>
                <div>
                  <strong>{item.title}</strong>
                  <small>{item.text}</small>
                </div>
                <button
                  className="text-btn"
                  type="button"
                  data-notification-view={item.id}
                  data-notification-key={item.key}
                  onClick={() => markReadAndOpen(item)}
                >
                  Ver
                </button>
              </div>
            ))}
            {!items.some((item) => !readIds.has(item.key)) && (
              <EmptyState>Você não tem notificações no momento.</EmptyState>
            )}
          </div>
        </Modal>
      )}
    </>
  );
}

export default function AppShell() {
  const { user } = useAuth();
  const { applications } = useAppData();
  const navigate = useNavigate();
  const location = useLocation();
  const [pendingScrollId, setPendingScrollId] = useState('');
  const links = useMemo(() => getMenu(user.role), [user.role]);
  const currentPage = location.pathname.slice(1) || 'mural';
  const homePath = user.role === 'student' ? '/mural' : '/painel';

  useEffect(() => {
    if (!pendingScrollId) return undefined;
    const timer = window.setTimeout(() => {
      const row = document.querySelector(`[data-application-id="${CSS.escape(pendingScrollId)}"]`);
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      row?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'center' });
      if (row) {
        const removeHighlight = (event) => {
          if (event.target !== row || event.animationName !== 'notification-highlight') return;
          row.classList.remove('notification-highlight');
          row.removeEventListener('animationend', removeHighlight);
        };
        row.addEventListener('animationend', removeHighlight);
        row.classList.add('notification-highlight');
      }
      setPendingScrollId('');
    }, 200);
    return () => window.clearTimeout(timer);
  }, [pendingScrollId, applications, location.pathname]);

  const openNotification = (path, applicationId) => {
    setPendingScrollId(applicationId);
    navigate(path);
  };

  const setPath = (path) => {
    navigate(path);
  };

  return (
    <div className="shell">
      <aside className="sidebar">
        <Link className="brand" to={homePath}>
          <span className="brand-mark">N</span>NextHub
        </Link>
        <div className="nav-caption">MENU PRINCIPAL</div>
        <nav className="nav">
          {links.map(([label, path, id]) => (
            <Link
              className={currentPage === id ? 'active' : ''}
              data-go={id}
              key={id}
              to={path}
            >
              <span className="ico">{icons[label] || '•'}</span>
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="main">
        <header className="topbar">
          <div className="crumb">{pageTitles[currentPage] || 'NextHub'}</div>
          <div className="top-actions">
            <Notifications user={user} applications={applications} onNavigate={openNotification} />
            <button
              className="avatar avatar-link"
              data-go={user.role === 'student' ? 'perfil' : 'config'}
              type="button"
              title="Abrir perfil"
              onClick={() => setPath(user.role === 'student' ? '/perfil' : '/config')}
            >
              {(user.name || 'N')[0].toLocaleUpperCase('pt-BR')}
            </button>
            <span className="user-label">{user.name.split(' ')[0]}</span>
          </div>
        </header>
        <div className="page" key={location.key}><Outlet /></div>
      </main>
      <nav className="mobile-nav">
        {(user.role === 'company'
          ? [...links.filter((link) => link[1] !== '/publicar').slice(0, 2), ['＋ Publicar', '/publicar', 'publicar'], ...links.filter((link) => link[1] !== '/publicar').slice(2, 4)]
          : links.slice(0, 5)).map(([label, path, id]) => (
          <Link
            className={`${id === 'publicar' ? 'publish-nav ' : ''}${currentPage === id ? 'active' : ''}`}
            data-go={id}
            key={id}
            to={path}
          >
            <b>{id === 'publicar' ? '＋' : icons[label] || '•'}</b>
            {id === 'publicar' ? 'Publicar' : label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
