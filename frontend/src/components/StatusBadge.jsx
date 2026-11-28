export function StatusBadge({ children }) {
  const className = String(children || '').toLocaleLowerCase('pt-BR').replaceAll(' ', '-');
  return <span className={`badge ${className}`}>{children}</span>;
}
