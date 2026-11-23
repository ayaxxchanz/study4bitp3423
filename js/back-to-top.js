/* Shared back-to-top control for the dashboard, lectures and changelog. */
(() => {
  'use strict';
  const button = document.createElement('button');
  button.className = 'back-to-top';
  button.type = 'button';
  button.hidden = true;
  button.setAttribute('aria-label', 'Back to top');
  button.title = 'Back to top';
  button.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 12 6-6 6 6M12 6v14"/></svg>';
  window.getStudyFloatingControls().append(button);

  const update = () => { button.hidden = window.scrollY < 300; };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('load', update);
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
    });
  });
  update();
})();
