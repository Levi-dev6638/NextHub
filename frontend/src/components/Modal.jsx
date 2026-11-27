import { useEffect, useState } from 'react';

export default function Modal({
  id = 'modal',
  title,
  header,
  closeButtonId,
  className = '',
  onClose,
  children,
}) {
  const [closing, setClosing] = useState(false);

  const close = () => {
    if (!closing) setClosing(true);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setClosing(true);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      className={`modal-backdrop${closing ? ' is-closing' : ''}`}
      id={id}
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget && event.animationName === 'backdrop-exit') {
          onClose();
        }
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div className={`modal ${className}`.trim()} role="dialog" aria-modal="true">
        <div className="modal-head">
          <div>{header || <h2>{title}</h2>}</div>
          <button
            className="icon-btn"
            id={closeButtonId}
            type="button"
            aria-label="Fechar"
            onClick={close}
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
