class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

async function request(path, options = {}) {
  const isFormData = options.body instanceof FormData;
  const response = await fetch(`/api${path}`, {
    credentials: 'same-origin',
    ...options,
    headers: {
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      ...options.headers,
    },
  });

  let data = {};
  try {
    data = await response.json();
  } catch {
    if (response.ok) return null;
  }

  if (!response.ok) {
    throw new ApiError(data.error || data.message || 'Não foi possível concluir a ação.', response.status);
  }

  return data;
}

export const api = {
  me: () => request('/me'),
  login: (credentials) => request('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }),
  register: (details) => request('/auth/register', {
    method: 'POST',
    body: JSON.stringify(details),
  }),
  logout: () => request('/auth/logout', { method: 'POST' }),
  opportunities: (filters = {}) => {
    const query = new URLSearchParams(
      Object.entries(filters).filter(([, value]) => value),
    );
    return request(`/opportunities${query.size ? `?${query}` : ''}`);
  },
  createOpportunity: (details) => request('/opportunities', {
    method: 'POST',
    body: JSON.stringify(details),
  }),
  updateOpportunity: (id, details) => request(`/opportunities/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(details),
  }),
  closeOpportunity: (id) => request(`/opportunities/${id}`, { method: 'DELETE' }),
  favorites: () => request('/favorites'),
  toggleFavorite: (id) => request(`/favorites/${id}`, { method: 'POST' }),
  applications: () => request('/applications'),
  apply: (id) => request(`/applications/${id}`, { method: 'POST' }),
  updateApplication: (id, status) => request(`/applications/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  }),
  withdrawApplication: (id) => request(`/applications/${id}`, { method: 'DELETE' }),
  updateProfile: (details) => request('/profile', {
    method: 'PATCH',
    body: JSON.stringify(details),
  }),
  uploadResume: (file) => {
    const formData = new FormData();
    formData.append('resume', file);
    return request('/resume', { method: 'POST', body: formData });
  },
};

export { ApiError };
