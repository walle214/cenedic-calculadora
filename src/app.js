import 'normalize.css';
import './scss/main.scss';

import './js/operations';
import './js/numbers';
import './js/memory';
import './js/display';

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator)
    navigator.serviceWorker.register('service-worker.js');
});

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  //   e.preventDefault();
  //   // Stash the event so it can be triggered later.
  //   deferredPrompt = e;
  //   // Update UI notify the user they can install the PWA
  //   showInstallPromotion();
});
