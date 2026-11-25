import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // A lógica e os fluxos originais da interface são inicializados dentro
    // do elemento controlado pelo React, sem alterar os contratos da API.
    import('./legacy.js');
  }, []);

  return <div id="app" />;
}
