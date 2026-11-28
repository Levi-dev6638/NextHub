import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ToastContext } from './toast-context.js';

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const timers = useRef(new Map());

  const dismiss = useCallback((id) => {
    setToasts((items) => items.map((item) => (
      item.id === id ? { ...item, exiting: true } : item
    )));
  }, []);

  const remove = useCallback((id) => {
    window.clearTimeout(timers.current.get(id));
    timers.current.delete(id);
    setToasts((items) => items.filter((item) => item.id !== id));
  }, []);

  const showToast = useCallback((message) => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts((items) => [...items, { id, message, exiting: false }]);
    const timer = window.setTimeout(() => {
      timers.current.delete(id);
      dismiss(id);
    }, 2600);
    timers.current.set(id, timer);
  }, [dismiss]);

  const value = useMemo(() => ({ showToast }), [showToast]);

  useEffect(() => () => {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current.clear();
  }, []);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="toast-container" aria-live="polite" aria-atomic="true">
        {toasts.map((toast) => (
          <div
            className={`toast${toast.exiting ? ' toast-exit' : ''}`}
            key={toast.id}
            onAnimationEnd={(event) => {
              if (toast.exiting && event.animationName === 'toast-out') remove(toast.id);
            }}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
