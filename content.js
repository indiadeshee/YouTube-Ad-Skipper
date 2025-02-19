// Function to block ads
function blockAds() {
  try {
    // Select the ad elements
    const adOverlay = document.querySelector('.ytp-ad-overlay-container');
    const videoAd = document.querySelector('.ytp-ad-module');
    const adSkipButton = document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern, .ytp-skip-ad-button');

    // Remove ad overlay if it exists
    if (adOverlay) {
      adOverlay.remove();
      console.log('Ad overlay removed');
    }

    // Remove video ads if they exist
    if (videoAd) {
      videoAd.remove();
      console.log('Video ads removed');
    }

    // Automatically click the skip button if it exists
    if (adSkipButton) {
      adSkipButton.click();
      console.log('Ad skip button clicked');
    }
  } catch (error) {
    console.error('Error blocking ads:', error);
  }
}

// Check if ad blocker is enabled
chrome.storage.sync.get('adBlockerEnabled', (data) => {
  if (data.adBlockerEnabled) {
    // Run the blockAds function every 500ms
    setInterval(blockAds, 500);

    // Observe changes in the DOM to detect new ads
    const observer = new MutationObserver(blockAds);
    observer.observe(document.body, { childList: true, subtree: true });
  }
});