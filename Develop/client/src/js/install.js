// Code Source: https://web.dev/codelab-make-installable/
const butInstall = document.getElementById('buttonInstall');
const divButton = document.getElementById('divButton');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the mini-infobar from appearing on mobile.
  event.preventDefault();
  console.log('👍', 'beforeinstallprompt', event);
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
  // Remove the 'hidden' class from the install button container.
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
  // Clear the deferredPrompt so it can be garbage collected
  window.deferredPrompt = null;
});

