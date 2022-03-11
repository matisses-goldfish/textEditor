// Code Source: https://web.dev/codelab-make-installable/
const butInstall = document.getElementById('buttonInstall');
const divButton = document.getElementById('divButton');

// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  console.log('👍', 'beforeinstallprompt', event);
  window.deferredPrompt = event;
  divButton.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {

  console.log('👍', 'butInstall-clicked');

  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  const result = await promptEvent.userChoice;

  console.log('👍', 'userChoice', result);

  window.deferredPrompt = null;
  divButton.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  console.log('👍', 'appinstalled', event);
  window.deferredPrompt = null;
});

