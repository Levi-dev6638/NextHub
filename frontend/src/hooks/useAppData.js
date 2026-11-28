import { useContext } from 'react';
import { AppDataContext } from '../contexts/app-data-context.js';

export function useAppData() {
  const context = useContext(AppDataContext);
  if (!context) throw new Error('useAppData deve ser usado dentro de AppDataProvider.');
  return context;
}
