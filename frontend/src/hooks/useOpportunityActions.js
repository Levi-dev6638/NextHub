import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppData } from './useAppData.js';
import { useAuth } from './useAuth.js';
import { useToast } from './useToast.js';
import { api } from '../services/api.js';

export default function useOpportunityActions() {
  const { user } = useAuth();
  const { refresh } = useAppData();
  const navigate = useNavigate();
  const toast = useToast();

  const toggleFavorite = useCallback(async (id) => {
    try {
      await api.toggleFavorite(id);
      refresh();
    } catch (error) {
      toast(error.message);
    }
  }, [refresh, toast]);

  const apply = useCallback(async (id) => {
    const profile = user.profile || {};
    const missing = [];
    if (!user.name?.trim()) missing.push('nome');
    if (!user.email?.trim()) missing.push('e-mail');
    if (!profile.phone?.trim()) missing.push('telefone');
    if (!profile.resume) missing.push('currículo PDF');
    if (missing.length) {
      toast(`Para se candidatar, complete no perfil: ${missing.join(', ')}.`);
      navigate('/perfil');
      return;
    }

    try {
      await api.apply(id);
      toast('Candidatura registrada!');
      refresh();
    } catch (error) {
      toast(error.message);
    }
  }, [user, navigate, refresh, toast]);

  return { apply, toggleFavorite };
}
