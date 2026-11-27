import { useCallback, useEffect, useMemo, useState } from 'react';
import { AppDataContext } from './app-data-context.js';
import { api } from '../services/api.js';
import { useAuth } from '../hooks/useAuth.js';

export function AppDataProvider({ children }) {
  const { user } = useAuth();
  const [opportunities, setOpportunities] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [revision, setRevision] = useState(0);

  const refresh = useCallback(() => {
    setLoading(true);
    setError('');
    setRevision((value) => value + 1);
  }, []);

  useEffect(() => {
    let active = true;

    Promise.all([
      api.opportunities(),
      api.applications(),
      user.role === 'student' ? api.favorites() : Promise.resolve([]),
    ]).then(([nextOpportunities, nextApplications, nextFavorites]) => {
      if (!active) return;
      setOpportunities(nextOpportunities);
      setApplications(nextApplications);
      setFavorites(nextFavorites);
    }).catch((loadError) => {
      if (active) setError(loadError.message);
    }).finally(() => {
      if (active) setLoading(false);
    });

    return () => {
      active = false;
    };
  }, [user.id, user.role, revision]);

  const value = useMemo(() => ({
    opportunities,
    favorites,
    applications,
    loading,
    error,
    refresh,
    setOpportunities,
  }), [opportunities, favorites, applications, loading, error, refresh]);

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
}
