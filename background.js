// Listen for installation
chrome.runtime.onInstalled.addListener(() => {
    // Set default state to enabled
    chrome.storage.local.set({ enabled: true });
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
    // Check if the extension is enabled
    const result = await chrome.storage.local.get('enabled');
    const isEnabled = result.enabled !== false; // Default to true if not set

    // Check if the navigated URL is a YouTube Shorts URL
    if (isEnabled && details.url.includes('/shorts/')) {
        // Redirect to the main YouTube page
        chrome.tabs.update(details.tabId, { url: 'https://www.youtube.com/' });
    }
}, { url: [{ urlContains: '/shorts/' }] }); 