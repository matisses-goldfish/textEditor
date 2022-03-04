const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    // Store the triggered events
    event.preventDefault();
    butInstall.classList.toggle('visible');
    
});

butInstall.addEventListener('click', async () => {

  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  // Show prompt
  promptEvent.prompt();
  
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {

  textHeader.textContent = 'Successfully installed!';
  console.log('👍', 'appinstalled', event);
});

