document.addEventListener('DOMContentLoaded', function() {
    const toggleExtension = document.getElementById('toggleExtension');
    const toggleHideFeed = document.getElementById('toggleHideFeed'); // Get reference to the new toggle
    const toggleMotivation = document.getElementById('toggleMotivation'); // Get reference to the Motivation Mode toggle
    const toggleComments = document.getElementById('toggleComments'); // Get reference to the Hide Comments toggle
    const toggleAds = document.getElementById('toggleAds'); // Get reference to the Block Ads toggle
    const featureBlockAds = document.getElementById('featureBlockAds');
    const status = document.getElementById('status');

    // All features are now available to all users

    // Load initial states
    chrome.storage.local.get(['enabled', 'hideComments', 'blockAds', 'hideFeed', 'motivationEnabled'], function(result) { // Added 'motivationEnabled'
        // Extension toggle state
        toggleExtension.checked = result.enabled !== false; // Default to true
        updateStatus(toggleExtension.checked);

        // Hide Feed toggle state
        toggleHideFeed.checked = result.hideFeed === true; // Default to false

        // Motivation Mode toggle state
        toggleMotivation.checked = result.motivationEnabled === true; // Default to false

        // Hide Comments toggle state
        toggleComments.checked = result.hideComments === true; // Default to false

        // Block Ads toggle state
        toggleAds.checked = result.blockAds === true; // Default to false

        // Comments and Ads toggles are now enabled for all users
    });

    // Handle extension toggle changes
    toggleExtension.addEventListener('change', function() {
        const enabled = toggleExtension.checked;
        chrome.storage.local.set({ enabled: enabled }, function() {
            updateStatus(enabled);
            // Notify content script
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                if (tabs && tabs[0]) {
                    chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleExtension', enabled: enabled });
                }
            });
        });
    });

    // Handle Hide Feed toggle changes
    toggleHideFeed.addEventListener('change', function() {
        const hideFeed = toggleHideFeed.checked;
        chrome.storage.local.set({ hideFeed: hideFeed }, function() {
            // Notify content script
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                if (tabs && tabs[0]) {
                    chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleHideFeed', hideFeed: hideFeed });
                }
            });
        });
    });

    // Handle Motivation Mode toggle changes
    toggleMotivation.addEventListener('change', function() {
        const motivationEnabled = toggleMotivation.checked;
        chrome.storage.local.set({ motivationEnabled: motivationEnabled }, function() {
            // If Motivation Mode is enabled, automatically turn on Hide Feed
            if (motivationEnabled) {
                toggleHideFeed.checked = true;
                const hideFeed = toggleHideFeed.checked;
                chrome.storage.local.set({ hideFeed: hideFeed }, function() {
                    // Notify content script about Hide Feed change
                    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                        if (tabs && tabs[0]) {
                            chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleHideFeed', hideFeed: hideFeed });
                        }
                    });
                });
            }

            // Notify content script about Motivation Mode change
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                if (tabs && tabs[0]) {
                    chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleMotivation', motivationEnabled: motivationEnabled });
                }
            });
        });
    });

    // Handle Hide Comments toggle changes
    toggleComments.addEventListener('change', function() {
        const hideComments = toggleComments.checked;
        chrome.storage.local.set({ hideComments: hideComments }, function() {
            // Notify content script
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                if (tabs && tabs[0]) {
                    chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleComments', hideComments: hideComments });
                }
            });
        });
    });

    // Handle Block Ads toggle changes
    toggleAds.addEventListener('change', function() {
        const blockAds = toggleAds.checked;
        chrome.storage.local.set({ blockAds: blockAds }, function() {
            // Notify content script
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                if (tabs && tabs[0]) {
                    chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleAds', blockAds: blockAds });
                }
            });
        });
    });

    // All features are now available to all users - no locked features


    function updateStatus(enabled) {
        status.textContent = enabled ? 'Extension is enabled' : 'Extension is disabled';
    }
}); 