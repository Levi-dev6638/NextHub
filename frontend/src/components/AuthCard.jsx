import { Link } from 'react-router-dom';

export default function AuthCard({ title, description, children }) {
  return (
    <main className="login-bg">
      <div className="login-card">
        <Link className="brand" to="/">
          <span className="brand-mark">N</span>NextHub
        </Link>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </main>
  );
}
