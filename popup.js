// Toggle button event listener
document.getElementById('toggle').addEventListener('change', function() {
  // Save the state to chrome.storage
  chrome.storage.sync.set({ adBlockerEnabled: this.checked }, () => {
    console.log('Ad Blocker is', this.checked ? 'ON' : 'OFF');
    // Reload the current tab to apply changes
    chrome.tabs.reload();
  });
});

// Restore the state from chrome.storage
chrome.storage.sync.get('adBlockerEnabled', function(data) {
  document.getElementById('toggle').checked = data.adBlockerEnabled || false;
});