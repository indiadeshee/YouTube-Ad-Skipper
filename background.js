chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ adSkipperEnabled: true });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url && tab.url.includes('youtube.com/watch')) {
    chrome.storage.sync.get('adSkipperEnabled', (data) => {
      if (data.adSkipperEnabled) {
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          files: ['content.js']
        });
      }
    });
  }
});