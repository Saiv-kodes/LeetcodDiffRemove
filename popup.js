document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
  
    //  current state
    chrome.storage.sync.get('enabled', (data) => {
      toggleButton.textContent = data.enabled ? 'Disable' : 'Enable';
    });
  
    
    toggleButton.addEventListener('click', () => {
      chrome.storage.sync.get('enabled', (data) => {
        const newState = !data.enabled;
        chrome.storage.sync.set({ enabled: newState }, () => {
          toggleButton.textContent = newState ? 'Disable' : 'Enable';
          
          
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { enabled: newState });
          });
        });
      });
    });
  });
  