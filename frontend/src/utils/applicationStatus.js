export function displayApplicationStatus(status) {
  return status === 'Enviada' ? 'Em análise' : status || 'Em análise';
}
