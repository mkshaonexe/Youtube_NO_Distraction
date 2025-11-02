// Function to check if extension is enabled
async function isExtensionEnabled() {
    const result = await chrome.storage.local.get('enabled');
    return result.enabled !== false; // Default to true if not set
}

// Function to apply/remove CSS class on the body for main extension state
function toggleExtensionCssClass(enabled) {
    if (enabled) {
        document.body.classList.add('no-shorts-no-reels-enabled');
    } else {
        document.body.classList.remove('no-shorts-no-reels-enabled');
    }
}

// Function to apply/remove CSS class on the body for hiding shorts specifically
function toggleShortsCssClass(hideShorts) {
    if (hideShorts) {
        document.body.classList.add('hide-shorts-enabled');
    } else {
        document.body.classList.remove('hide-shorts-enabled');
    }
}

// Function to apply/remove CSS class on the body for hiding comments (Premium placeholder)
function toggleCommentsCssClass(hideComments) {
    // This function is now just a placeholder for the premium feature
    if (hideComments) {
        document.body.classList.add('hide-comments-enabled');
    } else {
        document.body.classList.remove('hide-comments-enabled');
    }
}

// Function to apply/remove CSS class on the body for hiding the feed
function toggleHideFeedCssClass(hideFeed) {
    console.log(`[Hide Feed] toggleHideFeedCssClass called with: ${hideFeed}. Current URL: ${window.location.pathname}`);
    if (hideFeed) {
        console.log('[Hide Feed] Attempting to add hide-feed-enabled class to body.');
        document.body.classList.add('hide-feed-enabled');
        console.log('[Hide Feed] Added hide-feed-enabled class. Body classes:', document.body.classList.value);
    } else {
        console.log('[Hide Feed] Attempting to remove hide-feed-enabled class from body.');
        document.body.classList.remove('hide-feed-enabled');
        console.log('[Hide Feed] Removed hide-feed-enabled class. Body classes:', document.body.classList.value);
    }
}

// Function to apply/remove CSS class on the body for Motivation Mode
function toggleMotivationCssClass(motivationEnabled) {
    console.log(`[Motivation Mode] Toggling motivation mode: ${motivationEnabled}. Current URL: ${window.location.pathname}`);
    if (motivationEnabled && window.location.pathname === '/') {
        console.log('[Motivation Mode] Applying motivation mode (homepage and enabled).');
        document.body.classList.add('motivation-mode-enabled');
        displayMotivationQuote(); // Call function to display quote
    } else {
        console.log('[Motivation Mode] Removing motivation mode.');
        document.body.classList.remove('motivation-mode-enabled');
        removeMotivationQuote(); // Call function to remove quote
    }
}


// Function to display a motivational quote
function displayMotivationQuote() {
    console.log('[Motivation Mode] Attempting to display quote.');
    // Simple array of quotes
    const quotes = [
        "The expert in anything was once a beginner. - Helen Hayes",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Education is the key to unlocking the world, a passport to freedom. - Oprah Winfrey",
        "The beautiful thing about learning is that no one can take it away from you. - B.B. King",
        "Learning is not attained by chance, it must be sought for with ardor and diligence. - Abigail Adams",
        "Strive for progress, not perfection. - Unknown",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "The best way to predict the future is to create it. - Peter Drucker",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "The mind is everything. What you think you become. - Buddha",
        "Our greatest weakness lies in giving up. The most certain way to succeed is always to just once more. - Thomas A. Edison",
        "The only impossible journey is the one you never begin. - Tony Robbins",
        "Limit your 'always' and your 'nevers.' - Amy Poehler",
        "Nothing is impossible, the word itself says 'I'm possible'! - Audrey Hepburn",
        "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
        "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
        "Go confidently in the direction of your dreams. Live the life you have imagined. - Henry David Thoreau",
        "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
        "If you want to achieve greatness stop asking for permission. - Unknown",
        "Things work out best for those who make the best of how things work out. - John Wooden",
        "To live a creative life, we must lose our fear of being wrong. - Joseph Chilton Pearce",
        "If you are not willing to risk the usual you will have to settle for the ordinary. - Jim Rohn",
        "Learn as if you will live forever, live as if you will die today. - Mahatma Gandhi",
        "Be patient with yourself. Self-growth is tender; it's holy ground. There's no greater investment. - Stephen Covey",
        "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice. - Brian Herbert",
        "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. - Mark Twain",
        "The mind is not a vessel to be filled, but a fire to be kindled. - Plutarch",
        "Don't let what you cannot do interfere with what you can do. - John Wooden",
        "Start where you are. Use what you have. Do what you can. - Arthur Ashe"
    ];

    // Select a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const [quoteText, author] = randomQuote.split(' - ');

    // Create quote elements
    const quoteContainer = document.createElement('div');
    quoteContainer.classList.add('motivation-quote-container');

    const quoteElement = document.createElement('div');
    quoteElement.classList.add('motivation-quote');
    quoteElement.textContent = '"' + quoteText + '"';

    const authorElement = document.createElement('div');
    authorElement.classList.add('motivation-author');
    authorElement.textContent = '- ' + author;

    // Append elements
    quoteContainer.appendChild(quoteElement);
    quoteContainer.appendChild(authorElement);
    document.body.appendChild(quoteContainer);

    // Verify if the element was added
    const addedElement = document.querySelector('.motivation-quote-container');
    if (addedElement) {
        console.log('[Motivation Mode] Quote container element successfully added to body.');
    } else {
        console.error('[Motivation Mode] Failed to add quote container element to body.');
    }
}

// Function to remove the motivational quote
function removeMotivationQuote() {
    console.log('[Motivation Mode] Attempting to remove quote.');
    const quoteContainer = document.querySelector('.motivation-quote-container');
    if (quoteContainer) {
        quoteContainer.remove();
        console.log('[Motivation Mode] Quote container element removed from body.');
    } else {
        console.log('[Motivation Mode] Quote container element not found, nothing to remove.');
    }
}

// Hide feed immediately on homepage to prevent flash (CSS will handle it until JS loads)
if (window.location.pathname === '/') {
    document.documentElement.classList.add('preload-feed-hidden');
}

// Fallback redirect for shorts URLs if background script didn't catch it
async function fallbackShortsRedirect() {
    const result = await chrome.storage.local.get('hideShorts');
    const hideShorts = result.hideShorts !== false; // Default to true
    if (hideShorts && window.location.pathname.includes('/shorts/')) {
        window.location.href = 'https://www.youtube.com/';
    }
}

// Run fallback redirect immediately when content script loads
fallbackShortsRedirect();

// Initial run on page load (for applying CSS classes based on stored state)
async function initializeExtension() {
    console.log('[Hide Feed] Initializing extension.');
    const result = await chrome.storage.local.get(['enabled', 'hideComments', 'hideFeed', 'motivationEnabled', 'hideShorts']); // Added 'hideShorts'
    const enabled = result.enabled !== false; // Default to true
    const hideComments = result.hideComments === true; // Default to false
    const hideFeed = result.hideFeed === true; // Default to false
    const motivationEnabled = result.motivationEnabled === true; // Default to false
    const hideShorts = result.hideShorts !== false; // Default to true (hide shorts by default)

    toggleExtensionCssClass(enabled);
    toggleCommentsCssClass(hideComments);
    toggleShortsCssClass(hideShorts); // Apply shorts hiding class
    
     // Clear preload hiding class and apply proper hiding if needed
     document.documentElement.classList.remove('preload-feed-hidden');
    
     // If hide feed is initially enabled AND we are on the homepage, apply the class
     console.log(`[Hide Feed] Initial check - hideFeed: ${hideFeed}, current path: ${window.location.pathname}`);
     if (window.location.pathname === '/') {
        if (hideFeed) {
            console.log('[Hide Feed] Applying hide-feed-enabled class on initialization (homepage and enabled).');
            toggleHideFeedCssClass(true);
        }
        // If hideFeed is disabled, we just removed preload-feed-hidden, so feed will show naturally
     }
     // If not on homepage, we just removed preload-feed-hidden, so feed will show naturally

     // If motivation mode is initially enabled on page load, display the quote
     if (motivationEnabled) {
        toggleMotivationCssClass(true);
     }
}

// Initialize immediately - CSS pre-hides the feed so no flash will occur
initializeExtension();

// Listen for messages from the popup to toggle extension state and features
chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    console.log(`[Hide Feed] Message received: ${request.action}`);
    if (request.action === 'toggleExtension') {
        toggleExtensionCssClass(request.enabled);
    } else if (request.action === 'toggleShorts') {
        // Handle Hide Shorts toggle
        toggleShortsCssClass(request.hideShorts);
    } else if (request.action === 'toggleComments') {
        // Handle Hide Comments toggle
        toggleCommentsCssClass(request.hideComments);
    } else if (request.action === 'toggleHideFeed') { // Handle toggleHideFeed action
        console.log(`[Hide Feed] Toggle Hide Feed message received - hideFeed: ${request.hideFeed}, current path: ${window.location.pathname}`);
        // Only apply hide feed if on the homepage
        if (window.location.pathname === '/') {
            if (request.hideFeed) {
                console.log('[Hide Feed] Applying hide-feed-enabled class from message (homepage and enabled).');
                toggleHideFeedCssClass(true);
            } else {
                console.log('[Hide Feed] Removing hide-feed-enabled class from message.');
                toggleHideFeedCssClass(false);
            }
        }
    } else if (request.action === 'toggleMotivation') { // Handle new toggleMotivation action
        console.log(`[Motivation Mode] Toggle Motivation Mode message received - motivationEnabled: ${request.motivationEnabled}, current path: ${window.location.pathname}`);
        // Only apply motivation mode if on the homepage
        if (request.motivationEnabled && window.location.pathname === '/') {
            console.log('[Motivation Mode] Applying motivation mode from message (homepage and enabled).');
            toggleMotivationCssClass(true);
        } else {
             console.log('[Motivation Mode] Removing motivation mode from message.');
             toggleMotivationCssClass(false); // Ensure it's off if not on homepage or toggle is off
        }
    }
});

// Utility: remove any Shorts items from current DOM
function removeShortsFromDom(root = document) {
    try {
        // Remove explicit Shorts shelves with their container (header + Show more)
        root.querySelectorAll('ytd-reel-shelf-renderer, ytd-reel-shelf-surface-renderer').forEach(el => {
            const container = el.closest('ytd-item-section-renderer, ytd-shelf-renderer, ytd-rich-section-renderer') || el;
            container.remove();
        });

        // Remove any individual result cards or shelves that link to /shorts/
        const candidates = root.querySelectorAll('a[href*="/shorts/"]');
        for (const link of candidates) {
            const card = link.closest('ytd-video-renderer, ytd-grid-video-renderer, ytd-rich-item-renderer, ytd-compact-video-renderer, ytd-shelf-renderer, ytd-rich-section-renderer');
            if (card) card.remove();
        }

        // Remove community post shelves that sometimes appear in search/home
        root.querySelectorAll('ytd-shelf-renderer ytd-post-renderer, ytd-backstage-post-thread-renderer, ytd-post-renderer').forEach(el => {
            const shelf = el.closest('ytd-shelf-renderer, ytd-rich-section-renderer, ytd-item-section-renderer');
            if (shelf) shelf.remove();
        });

        // As a fallback, drop any shelf-like block that clearly labels itself as "Shorts"
        root.querySelectorAll('ytd-shelf-renderer, ytd-rich-section-renderer, ytd-item-section-renderer').forEach(block => {
            const text = (block.innerText || '').trim();
            if (text && /\bShorts\b/i.test(text) && block.querySelector('button, a, ytd-reel-shelf-renderer, ytd-reel-shelf-surface-renderer')) {
                // Ensure it is really the Shorts shelf by requiring a control/child inside
                block.remove();
            }
        });
    } catch (err) {
        // no-op
    }
}

// When on search results, aggressively prune Shorts and shelves
async function handleSearchPage() {
    const result = await chrome.storage.local.get('hideShorts');
    const hideShorts = result.hideShorts !== false; // Default to true
    if (!hideShorts) return;
    if (!location.pathname.startsWith('/results')) return;
    removeShortsFromDom();
}

// Run on initial load as well
handleSearchPage();

// Use a MutationObserver to re-apply classes and redirect on significant DOM changes (like page navigation in SPA)
// This is a lighter observer than before, only checking for major structural changes.
const observer = new MutationObserver(async (mutations) => {
    // Check for changes that might indicate a page navigation or significant content load
    const urlChanged = location.href !== observer.lastUrl;
    if (urlChanged) {
        observer.lastUrl = location.href;
        console.log(`[MutationObserver] URL changed to: ${location.href}`);

        // Re-apply all initial settings on URL change
        const result = await chrome.storage.local.get(['enabled', 'hideComments', 'hideFeed', 'motivationEnabled', 'hideShorts']); // Added 'hideShorts'
        toggleExtensionCssClass(result.enabled !== false);
        toggleCommentsCssClass(result.hideComments === true);
        toggleShortsCssClass(result.hideShorts !== false); // Re-apply shorts hiding class
        // toggleHideFeedCssClass(result.hideFeed === true); // Don't apply here, apply conditionally below

        // Handle feed visibility on URL change
        console.log(`[Hide Feed] MutationObserver - hideFeed state: ${result.hideFeed}, new path: ${window.location.pathname}`);
        toggleHideFeedCssClass(false); // Remove class on any URL change initially
        
        // Add preload hiding on homepage navigation
        if (window.location.pathname === '/') {
            document.documentElement.classList.add('preload-feed-hidden');
            if (result.hideFeed === true) {
                console.log('[Hide Feed] MutationObserver - Applying hide-feed-enabled class (homepage and enabled).');
                toggleHideFeedCssClass(true);
            }
            // Remove preload after a short delay to allow smooth transition
            setTimeout(() => {
                document.documentElement.classList.remove('preload-feed-hidden');
            }, 50);
        }

        // If motivation mode is enabled on URL change, re-display the quote
        console.log(`[Motivation Mode] MutationObserver - motivationEnabled state: ${result.motivationEnabled}, new path: ${window.location.pathname}`);
        if (result.motivationEnabled === true && window.location.pathname === '/') {
            console.log('[Motivation Mode] MutationObserver - Applying motivation mode (homepage and enabled).');
            toggleMotivationCssClass(true);
        } else {
             console.log('[Motivation Mode] MutationObserver - Removing motivation mode.');
             toggleMotivationCssClass(false); // Ensure mode is off if not on homepage or mode is off
        }

        // Also re-check for shorts redirect on URL change as a fallback
        fallbackShortsRedirect();

        // If navigating to search results, clean Shorts
        handleSearchPage();
    }
});

observer.lastUrl = location.href; // Initialize lastUrl

// Start observing the body for child list and subtree changes (this is broad, can be refined)
observer.observe(document.body, {
    childList: true,
    subtree: true
}); 

// Observe incremental content loads to catch dynamically injected Shorts
const incrementalObserver = new MutationObserver(async (mutations) => {
    const result = await chrome.storage.local.get('hideShorts');
    const hideShorts = result.hideShorts !== false; // Default to true
    if (!hideShorts) return;
    // Only process on search and feeds
    if (location.pathname.startsWith('/results') || location.pathname === '/' || location.pathname.startsWith('/feed/')) {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    removeShortsFromDom(node);
                }
            }
        }
    }
});

incrementalObserver.observe(document.documentElement, { childList: true, subtree: true });