export default function EmptyState({ children }) {
  return (
    <div className="card empty">
      <strong>{children}</strong>
      Quando houver novidades, elas aparecerão aqui.
    </div>
  );
}
