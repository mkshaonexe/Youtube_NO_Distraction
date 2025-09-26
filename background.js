// Listen for installation
chrome.runtime.onInstalled.addListener(() => {
    // Set default state to enabled and hide shorts by default
    chrome.storage.local.set({ enabled: true, hideShorts: true });
});

// Listen for messages from content script (this might not be needed anymore with CSS-based approach, but keeping for now)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getState') {
        chrome.storage.local.get('enabled', (result) => {
            sendResponse({ enabled: result.enabled !== false });
        });
        return true; // Required for async sendResponse
    }
});

// Listen for navigation attempts
chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
    // Check if shorts hiding is enabled
    const result = await chrome.storage.local.get('hideShorts');
    const hideShorts = result.hideShorts !== false; // Default to true if not set

    // Check if the navigated URL is a YouTube Shorts URL
    if (hideShorts && details.url.includes('/shorts/')) {
        // Redirect to the main YouTube page
        chrome.tabs.update(details.tabId, { url: 'https://www.youtube.com/' });
    }
}, { url: [{ urlContains: '/shorts/' }] }); 