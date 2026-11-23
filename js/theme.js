/* Shared theme, loaded before styles to avoid a light flash. */
(() => {
  'use strict';
  const key = 'study4bitp3423-theme';
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let preference;
  let button;
  let floatingControls;
  // Both controls register with the same document-local dock at creation time.
  window.getStudyFloatingControls = () => {
    if (!floatingControls) {
      floatingControls = document.createElement('div');
      floatingControls.className = 'floating-controls';
      document.body.append(floatingControls);
    }
    return floatingControls;
  };

  try { preference = localStorage.getItem(key); } catch (_) { /* Storage is optional. */ }
  if (preference !== 'dark' && preference !== 'light') preference = null;
  // Embedded lecture and mind-map pages inherit even when storage is blocked.
  if (window.parent !== window) {
    try { preference = window.parent.document.documentElement.dataset.theme || preference; } catch (_) { /* Standalone fallback. */ }
  }

  function apply(theme) {
    root.dataset.theme = theme;
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) meta.content = theme;
    if (button) {
      button.setAttribute('aria-pressed', String(theme === 'dark'));
      button.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      button.querySelector('span').textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
    }
    document.querySelectorAll('iframe').forEach(frame => {
      try { frame.contentWindow.dispatchEvent(new CustomEvent('study-theme-change', { detail: theme })); } catch (_) { /* Ignore other origins. */ }
    });
  }

  apply(preference || (system.matches ? 'dark' : 'light'));
  window.addEventListener('study-theme-change', event => {
    if (event.detail === 'dark' || event.detail === 'light') apply(event.detail);
  });
  window.addEventListener('study-theme-select', event => {
    if (event.detail !== 'dark' && event.detail !== 'light') return;
    preference = event.detail;
    apply(preference);
  });
  window.addEventListener('storage', event => {
    if (event.key !== key && event.key !== null) return;
    preference = event.newValue === 'dark' || event.newValue === 'light' ? event.newValue : null;
    apply(preference || (system.matches ? 'dark' : 'light'));
  });
  system.addEventListener('change', event => {
    if (!preference) apply(event.matches ? 'dark' : 'light');
  });

  document.addEventListener('DOMContentLoaded', () => {
    // Embedded mind maps use their lecture's control; embedded lectures own a dock.
    if (window.parent !== window && !document.querySelector('.app')) return;
    button = document.createElement('button');
    button.type = 'button';
    button.className = 'theme-toggle';
    button.setAttribute('aria-label', 'Dark mode');
    button.innerHTML = '<svg class="theme-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/></svg><svg class="theme-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg><span></span>';
    button.addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(key, preference); } catch (_) { /* Still works this visit. */ }
      apply(preference);
      if (window.parent !== window) {
        try {
          window.parent.dispatchEvent(new CustomEvent('study-theme-select', { detail: preference }));
        } catch (_) { /* Ignore other origins. */ }
      }
    });
    const dock = window.getStudyFloatingControls();
    dock.prepend(button);
    const viewer = document.getElementById('viewer');
    if (viewer) {
      const syncViewer = () => { dock.hidden = !viewer.hidden; };
      new MutationObserver(syncViewer).observe(viewer, {
        attributes: true, attributeFilter: ['hidden']
      });
      syncViewer();
    }
    apply(root.dataset.theme);
  });
})();
