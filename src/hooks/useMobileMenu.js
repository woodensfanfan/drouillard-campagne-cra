import { useCallback, useEffect, useState } from 'react';

const DESKTOP_QUERY = '(min-width: 1024px)';

/**
 * Gère l'état du menu mobile :
 * fermeture à la touche Échap, au passage en affichage bureau,
 * et verrouillage du défilement de la page tant que le menu est ouvert.
 */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((open) => !open), []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') close();
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onBreakpoint = (event) => {
      if (event.matches) close();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onBreakpoint);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [isOpen, close]);

  return { isOpen, toggle, close };
}
