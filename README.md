# 🎯 No Shorts No Distraction YT - Focus & Productivity Chrome Extension

[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://github.com/mkshaonexe/youtube-no-distraction)
[![Version](https://img.shields.io/badge/Version-0.0.9-success?style=for-the-badge)](https://github.com/mkshaonexe/youtube-no-distraction)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Stars](https://img.shields.io/github/stars/mkshaonexe/youtube-no-distraction?style=for-the-badge)](https://github.com/mkshaonexe/youtube-no-distraction/stargazers)

> **Transform your YouTube experience into a focused, distraction-free environment for enhanced productivity and mindful content consumption.**

## 🌟 Why No Shorts No Distraction YT?

In today's digital age, YouTube can be both a valuable learning resource and a major source of distraction. **No Shorts No Distraction YT** is designed to help students, professionals, and anyone seeking to maintain focus while browsing YouTube by eliminating time-wasting elements and promoting intentional viewing.

### 🎯 **Core Problems We Solve:**
- ❌ **YouTube Shorts addiction** - Endless scrolling through short-form content
- ❌ **Recommendation rabbit holes** - Getting lost in suggested videos
- ❌ **Homepage feed distractions** - Overwhelming content choices
- ❌ **Comment section toxicity** - Negative or distracting discussions
- ❌ **Intrusive advertisements** - Interrupting your focus flow
- ❌ **Lack of motivation** - Missing inspirational content for productivity

---

## ✨ Complete Feature Overview

### 🚫 **Core Distraction Elimination Features**

#### 1. **YouTube Shorts Blocker**
- **What it does**: Completely removes YouTube Shorts from all areas of the platform
- **Where it works**: 
  - Homepage feed
  - Search results
  - Recommendation sidebars
  - Navigation menu
  - Direct Shorts URLs (auto-redirects to main YouTube)
- **How it works**: Advanced CSS selectors and JavaScript detection identify and hide Shorts content
- **User benefit**: Prevents endless scrolling and time-wasting on short-form content

#### 2. **Smart URL Redirection**
- **What it does**: Automatically redirects Shorts URLs to the main YouTube homepage
- **How it works**: Background service worker monitors navigation and intercepts Shorts URLs
- **User benefit**: Prevents accidental Shorts viewing when clicking shared links

#### 3. **Recommendation Removal**
- **What it does**: Hides the "Up Next" sidebar and related video suggestions
- **Where it works**: Video watch pages and search results
- **User benefit**: Eliminates the temptation to watch unrelated content

### 🎛️ **Advanced Control Features**

#### 4. **Hide Feed Mode**
- **What it does**: Completely hides the YouTube homepage feed
- **When to use**: When you want to access YouTube only for specific content
- **How to activate**: Toggle switch in extension popup
- **User benefit**: Forces intentional YouTube usage instead of mindless browsing

#### 5. **Motivation Mode (Beta)**
- **What it does**: Replaces YouTube homepage with inspiring motivational quotes
- **Features**:
  - 30+ carefully curated motivational quotes
  - Random quote selection on each visit
  - Beautiful centered display with dark background
  - Automatic Hide Feed activation when enabled
- **Quote examples**:
  - *"The expert in anything was once a beginner." - Helen Hayes*
  - *"Learning is not attained by chance, it must be sought for with ardor and diligence." - Abigail Adams*
  - *"The only way to do great work is to love what you do." - Steve Jobs*
- **User benefit**: Provides daily inspiration and promotes a productivity mindset

#### 6. **Hide Comments**
- **What it does**: Removes comment sections from all YouTube videos
- **Benefits**: 
  - Eliminates toxic or negative discussions
  - Prevents getting distracted by comment debates
  - Reduces page loading time
  - Maintains focus on video content
- **How to activate**: Toggle switch in extension popup

#### 7. **Advanced Ad Blocker**
- **What it does**: Blocks various types of YouTube advertisements
- **Types blocked**:
  - Display ads
  - Promoted content
  - Banner advertisements
  - Video ads (where possible)
  - Sponsored content
- **User benefit**: Uninterrupted viewing experience and faster page loading

### 🔧 **Technical Features**

#### 8. **Intelligent Content Detection**
- **Technology**: Advanced CSS selectors and JavaScript mutation observers
- **Capability**: Detects dynamically loaded content and applies rules in real-time
- **Performance**: Optimized to minimize impact on page loading speed

#### 9. **State Management**
- **Storage**: Uses Chrome's local storage API for settings persistence
- **Sync**: Settings maintained across browser sessions
- **Flexibility**: Individual feature toggles for customized experience

#### 10. **Cross-Page Compatibility**
- **Coverage**: Works on all YouTube page types (homepage, watch, search, channel pages)
- **Navigation**: Handles YouTube's single-page application navigation
- **Updates**: Automatically applies settings when navigating between pages

---

## 🚀 Installation Guide

### **Method 1: Chrome Web Store (Recommended)**
*Coming Soon - Extension will be published to Chrome Web Store*

### **Method 2: Developer Installation**

#### **Step-by-Step Instructions:**

1. **Download the Extension**
   ```bash
   git clone https://github.com/mkshaonexe/youtube-no-distraction.git
   ```
   Or download ZIP from GitHub and extract

2. **Open Chrome Extensions**
   - Navigate to `chrome://extensions/`
   - Or: Menu → More Tools → Extensions

3. **Enable Developer Mode**
   - Toggle "Developer mode" switch in top-right corner

4. **Load Extension**
   - Click "Load unpacked"
   - Select the downloaded/extracted folder
   - Extension icon appears in toolbar

5. **Verify Installation**
   - Extension icon should appear in Chrome toolbar
   - Click icon to open popup interface

### **Alternative Browsers:**
- **Microsoft Edge**: Same process as Chrome (Chromium-based)
- **Firefox**: Coming soon (under development)
- **Opera**: Compatible via Chrome extension support

---

## 🎮 How to Use - Complete User Guide

### **Getting Started**

1. **First Launch**
   - Click the extension icon in your Chrome toolbar
   - You'll see the popup interface with all available features
   - Extension is enabled by default

2. **Basic Configuration**
   - **Enable Extension**: Master on/off switch for all features
   - Start with this toggle to activate core functionality

### **Feature-by-Feature Usage**

#### **🏠 Hide Feed Mode**
- **When to use**: When you want to visit YouTube for specific videos only
- **How to activate**: Toggle "Hide Feed" switch in popup
- **What happens**: YouTube homepage becomes blank, forcing intentional navigation
- **Perfect for**: Research, educational content, specific channel visits

#### **💪 Motivation Mode**
- **When to use**: When you need inspiration or want to limit browsing time
- **How to activate**: Toggle "Motivation Mode" switch
- **Auto-features**: Automatically enables Hide Feed for maximum focus
- **What you'll see**: Inspiring quotes on a dark background instead of video feed
- **Tip**: Great for morning motivation or study session starts

#### **💬 Hide Comments**
- **When to use**: When comments are distracting or negative
- **Benefits**: Cleaner interface, faster loading, better focus
- **Perfect for**: Educational videos, tutorials, sensitive topics

#### **🚫 Block Ads**
- **Automatic**: Works immediately when enabled
- **Coverage**: Blocks display ads, promoted content, and banners
- **Performance**: Improves page loading speed

### **Advanced Usage Tips**

#### **Productivity Workflows**

1. **Study Session Setup**:
   - Enable Hide Feed + Motivation Mode
   - Visit specific educational channels directly
   - Use search for targeted content only

2. **Research Mode**:
   - Enable Hide Comments + Block Ads
   - Keep recommendations off to avoid rabbit holes
   - Focus on video content only

3. **Casual Browsing Control**:
   - Enable Shorts Blocker only
   - Keep other features off for normal browsing
   - Gradually add more restrictions as needed

### **Troubleshooting Common Issues**

#### **Extension Not Working**
1. Refresh YouTube page after enabling
2. Check if extension is enabled in Chrome settings
3. Ensure you're on a YouTube page (*.youtube.com)

#### **Some Content Still Visible**
1. YouTube updates may require extension updates
2. Try disabling and re-enabling the specific feature
3. Clear browser cache and reload page

#### **Performance Issues**
1. Disable unused features to improve performance
2. Extension is optimized but complex pages may load slower
3. Report persistent issues on GitHub

---

## 🛠️ Technical Documentation

### **Architecture Overview**

#### **File Structure**
```
youtube-no-distraction/
├── 📄 manifest.json          # Extension configuration & permissions
├── 🔧 background.js          # Service worker for URL monitoring
├── 📱 content.js            # Main content script (DOM manipulation)
├── 🎨 popup.html            # Extension popup interface
├── ⚙️ popup.js              # Popup functionality & settings
├── 🎨 styles.css            # YouTube page CSS modifications
├── 📁 icons/               # Extension icons & assets
│   ├── icon.svg
│   └── icon128.png
└── 📖 README.md
```

#### **Core Technologies**
- **Manifest V3**: Latest Chrome extension standard
- **Service Workers**: Background processing for URL interception
- **Content Scripts**: DOM manipulation and CSS injection
- **Chrome Storage API**: Settings persistence
- **CSS Selectors**: Advanced element targeting
- **Mutation Observers**: Dynamic content detection

### **How It Works**

#### **1. Content Detection**
```javascript
// Advanced Shorts detection
const shortsSelectors = [
    'ytd-reel-shelf-renderer',
    'ytd-video-renderer[is-shorts]',
    'a[href*="/shorts/"]'
];
```

#### **2. Dynamic Content Handling**
```javascript
// Mutation observer for SPA navigation
const observer = new MutationObserver((mutations) => {
    // Detect URL changes and reapply rules
    if (location.href !== observer.lastUrl) {
        reapplyAllRules();
    }
});
```

#### **3. State Management**
```javascript
// Chrome storage integration
chrome.storage.local.get(['enabled', 'hideFeed', 'motivationEnabled'], 
    (result) => {
        applySettings(result);
    }
);
```

### **Performance Optimization**
- **Selective CSS**: Only applies rules when features are enabled
- **Efficient Observers**: Minimal DOM monitoring for better performance
- **Lazy Loading**: Features activate only when needed
- **Memory Management**: Proper cleanup of event listeners

### **Browser Compatibility**
- ✅ **Chrome 88+**: Full support with Manifest V3
- ✅ **Edge 88+**: Full support (Chromium-based)
- ⏳ **Firefox**: In development (Manifest V2 compatibility)
- ❓ **Safari**: Potential future support

---

## 📊 Version History & Changelog

### **🆕 Version 0.0.9 (Current)**
**Release Date**: 03 Nov, 01:32 AM
**Major Updates**:
- 🏷️ **Changed**: Extension name updated to "No Shorts No Distraction YT"
- 📦 **Version**: Reset to 0.0.9 for fresh start
- 🎯 **Improved**: Better branding and clarity

### **Version 2.7**
**Release Date**: Previous
**Major Bug Fixes**:
- 🐛 **Fixed**: Critical bug where recommendations appeared when toggling shorts even when recommendations were disabled
- 🔧 **Improved**: CSS rule consolidation to prevent conflicts between shorts and recommendations toggles
- ⚡ **Enhanced**: Better isolation between different feature toggles for more predictable behavior
- 📱 **Optimized**: Recommendation hiding rules now work consistently across all toggle states

### **Version 2.6**
**Release Date**: Previous
**Major Improvements**:
- 🐛 **Fixed**: Channel page display issues with yellow text overlays
- 🎨 **Improved**: CSS styling to prevent interference with YouTube's design
- ⚡ **Enhanced**: Performance optimization with better mutation observers
- 📱 **Better**: Cross-page compatibility and navigation handling
- 🔧 **Added**: More robust Shorts detection and removal

### **Version 2.5**
**Release Date**: Previous
**Features Added**:
- 💪 **New**: Motivation Mode with inspirational quotes
- 🎯 **Enhanced**: Shorts detection algorithm
- 🛡️ **Improved**: Error handling and stability
- 🎨 **Updated**: Modern popup interface design

### **Version 2.4**
- 🚫 **Enhanced**: Ad blocking capabilities
- 💬 **Added**: Hide Comments feature
- 🔧 **Fixed**: Various CSS conflicts

### **Version 2.3**
- 🏠 **New**: Hide Feed functionality
- ⚡ **Improved**: Extension performance
- 🎨 **Updated**: UI/UX improvements

### **Version 2.2**
- 🚫 **Enhanced**: Shorts removal algorithm
- 🔄 **Added**: Auto-redirect for Shorts URLs
- 🐛 **Fixed**: Search page compatibility

### **Version 2.1**
- 🎛️ **Added**: Individual feature toggles
- 💾 **Improved**: Settings persistence
- 🔧 **Fixed**: Extension state management

### **Version 2.0**
- 🔄 **Major**: Complete rewrite for Manifest V3
- 🎨 **New**: Modern popup interface
- ⚡ **Enhanced**: Performance and reliability

### **Version 1.x**
- 🚀 **Initial**: Basic Shorts blocking functionality
- 🔧 **Core**: Foundation features and architecture

---

## 🎯 Roadmap & Future Features

### **🔜 Coming Soon (Next Updates)**

#### **Version 2.7 (Planned)**
- 🌐 **Chrome Web Store**: Official publication
- 🦊 **Firefox Support**: Cross-browser compatibility
- 📊 **Usage Statistics**: Track time saved and distractions blocked
- 🎨 **Custom Themes**: Personalize motivation mode appearance

#### **Version 2.8 (Planned)**
- 📝 **Custom Quotes**: Add your own motivational quotes
- ⏰ **Time Limits**: Set viewing time restrictions
- 📈 **Productivity Reports**: Weekly/monthly usage summaries
- 🔔 **Smart Notifications**: Productivity reminders

#### **Version 3.0 (Future)**
- 🤖 **AI-Powered**: Smart content filtering based on your goals
- 📱 **Mobile Support**: Companion app for mobile browsers
- ☁️ **Cloud Sync**: Settings sync across devices
- 👥 **Team Features**: Shared settings for organizations

### **🎯 Long-term Vision**
- **Educational Integration**: LMS and educational platform support
- **Workplace Productivity**: Enterprise features for organizations
- **Mental Health**: Mindful browsing and digital wellness features
- **Accessibility**: Enhanced support for users with disabilities

---

## 🐛 Known Issues & Solutions

### **Current Known Issues**

#### **🔧 Minor Issues**
1. **Delayed Loading**: Some features may take 1-2 seconds to activate on page load
   - **Solution**: This is normal behavior due to YouTube's dynamic loading
   - **Workaround**: Refresh page if features don't activate

2. **YouTube Updates**: Occasional compatibility issues after YouTube updates
   - **Solution**: Extension updates released within 24-48 hours
   - **Workaround**: Disable and re-enable extension temporarily

### **Resolved Issues** ✅

1. **Toggle State Conflicts** (v2.7) 
   - **Problem**: Recommendations appeared when toggling shorts even when recommendations were disabled
   - **Root Cause**: CSS rules for recommendations were scattered and conflicting with shorts toggle logic
   - **Solution**: Consolidated all recommendation-hiding CSS rules into a single block to prevent conflicts

2. **Channel Page Display** (v2.6)
   - **Problem**: Yellow text overlays on channel pages
   - **Solution**: Removed conflicting CSS styles

3. **CSS Conflicts** (v2.6)
   - **Problem**: Extension styles interfering with YouTube's interface
   - **Solution**: More specific CSS selectors and better scoping

4. **Navigation Issues** (v2.5)
   - **Problem**: Features not working after page navigation
   - **Solution**: Enhanced mutation observers and URL change detection

### **Reporting Issues**
Found a bug? Help us improve!
1. 📝 **GitHub Issues**: [Create detailed bug report](https://github.com/mkshaonexe/youtube-no-distraction/issues)
2. 📧 **Email**: mkshaon2024@gmail.com
3. 💬 **Include**: Chrome version, extension version, steps to reproduce

---

## 🏆 User Testimonials & Use Cases

### **👨‍🎓 Students**
*"This extension transformed my study routine. No more getting distracted by Shorts when researching for assignments!"*

### **👩‍💼 Professionals**
*"Perfect for watching educational content during breaks without falling into the recommendation rabbit hole."*

### **👨‍🏫 Educators**
*"I recommend this to all my students. The motivation mode is particularly helpful for maintaining focus."*

### **🎯 Common Use Cases**

#### **Educational Research**
- Hide distracting content while researching topics
- Focus on educational channels and tutorials
- Avoid time-wasting recommendations

#### **Professional Development**
- Watch skill-building content without distractions
- Maintain focus during online courses
- Eliminate workplace browsing temptations

#### **Mindful Consumption**
- Intentional content viewing instead of mindless scrolling
- Reduce screen time and improve digital wellness
- Better work-life balance

---

## 🔒 Privacy & Security

### **Data Privacy**
- **No Data Collection**: Extension doesn't collect or transmit personal data
- **Local Storage Only**: All settings stored locally on your device
- **No Analytics**: No tracking or usage analytics
- **Open Source**: Complete transparency with public code

### **Permissions Explained**
- **Storage**: Save your extension settings locally
- **ActiveTab**: Apply features to current YouTube tab
- **WebNavigation**: Monitor URL changes for Shorts redirection
- **Host Permissions**: Access YouTube pages to apply modifications

### **Security Features**
- **Manifest V3**: Latest security standards
- **Minimal Permissions**: Only requests necessary permissions
- **No External Requests**: All functionality works offline
- **Regular Updates**: Security patches and improvements

---

## 🤝 Contributing & Development

### **How to Contribute**

#### **🐛 Bug Reports**
1. Check existing issues first
2. Provide detailed reproduction steps
3. Include browser and extension version
4. Screenshots or videos help!

#### **💡 Feature Requests**
1. Search existing feature requests
2. Explain the use case and benefits
3. Consider technical feasibility
4. Engage in community discussion

#### **👨‍💻 Code Contributions**
1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Follow existing code style and conventions
4. Add tests for new functionality
5. Update documentation as needed
6. Submit pull request with detailed description

### **Development Setup**

#### **Prerequisites**
- Chrome Browser (latest version)
- Basic knowledge of JavaScript, HTML, CSS
- Git for version control
- Code editor (VS Code recommended)

#### **Local Development**
```bash
# Clone repository
git clone https://github.com/mkshaonexe/youtube-no-distraction.git

# Navigate to directory
cd youtube-no-distraction

# Load in Chrome
# 1. Open chrome://extensions/
# 2. Enable Developer mode
# 3. Click "Load unpacked"
# 4. Select project directory
```

#### **Testing Guidelines**
- Test on different YouTube page types (home, watch, search, channel)
- Verify features work after navigation
- Check performance impact
- Test with different Chrome versions
- Ensure no console errors

#### **Code Style**
- Use meaningful variable names
- Comment complex logic
- Follow existing patterns
- Keep functions focused and small
- Use modern JavaScript features

---

## 📞 Developer Contact & Social Links

### **👨‍💻 About the Developer**

**MK Shaon** - Passionate developer focused on creating tools that enhance productivity and digital wellness.

#### **🌐 Connect with Me**

- **🐙 GitHub**: [@mkshaonexe](https://github.com/mkshaonexe)
- **🐦 YouTube**: [@mkshaon7](https://youtube.com/@mkshaon7)
- **📘 Facebook**: [@mkshaon777](https://facebook.com/mkshaon777)
- **📸 Instagram**: [@mkshaon7](https://instagram.com/mkshaon7)
- **📧 Email**: [mkshaon2024@gmail.com](mailto:mkshaon2024@gmail.com)

#### **💼 Professional**
- **🔗 LinkedIn**: Available upon request
- **🌐 Portfolio**: In development
- **💻 Other Projects**: Check GitHub profile

#### **🤝 Collaboration**
- Open to collaboration on productivity tools
- Available for custom extension development
- Interested in digital wellness projects
- Always learning and sharing knowledge

---

## 🌟 Support the Project

### **⭐ Star the Repository**
If this extension helps you stay focused, please star the repository on GitHub!

### **📢 Share with Others**
Help others discover this tool:
- Share on social media
- Recommend to friends and colleagues
- Write reviews and testimonials
- Create content about your experience

### **🐛 Report Issues**
Help improve the extension by reporting bugs and suggesting features.

### **💝 Donate/Support**
*Coming soon - Support options for continued development*

---

## 📋 FAQ (Frequently Asked Questions)

### **❓ General Questions**

**Q: Is this extension free?**
A: Yes, completely free and open-source. All features are available at no cost.

**Q: Does it work on other browsers?**
A: Currently Chrome and Edge. Firefox support coming soon.

**Q: Will it slow down YouTube?**
A: Minimal impact. The extension is optimized for performance.

### **🔧 Technical Questions**

**Q: Why do I need to refresh after enabling?**
A: YouTube's dynamic loading sometimes requires a refresh for full activation.

**Q: Can I use only some features?**
A: Yes! Each feature has its own toggle switch for customization.

**Q: Does it work on YouTube Music?**
A: Currently designed for main YouTube. YouTube Music support being considered.

### **🛠️ Troubleshooting**

**Q: Extension icon not showing?**
A: Check if extension is enabled in chrome://extensions/

**Q: Features not working?**
A: Try disabling and re-enabling the extension, then refresh YouTube.

**Q: Still seeing Shorts?**
A: YouTube frequently updates their code. Report issues for quick fixes.

---

## 📄 License & Legal

### **MIT License**
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### **Key Points**
- ✅ **Free to use**: Personal and commercial use allowed
- ✅ **Modify freely**: Adapt for your needs
- ✅ **Distribute**: Share with others
- ✅ **Private use**: Use in private projects
- ❗ **No warranty**: Use at your own risk
- ❗ **Attribution**: Credit original author

### **Third-Party**
- Uses Chrome Extension APIs
- No external dependencies
- All code is original or properly attributed

---

## 🚀 Keywords & Tags

**SEO Keywords**: YouTube productivity, Chrome extension, focus tool, distraction blocker, YouTube Shorts blocker, ad blocker, motivation quotes, study helper, digital wellness, mindful browsing, productivity extension, YouTube customization, browser extension, focus mode, content filtering

**GitHub Topics**: `chrome-extension` `youtube` `productivity` `focus` `distraction-blocker` `shorts-blocker` `javascript` `css` `browser-extension` `digital-wellness` `study-tool` `ad-blocker` `motivation` `open-source` `manifest-v3`

---

## 🎯 Call to Action

### **Ready to Transform Your YouTube Experience?**

1. **⬇️ Install Now**: Follow the installation guide above
2. **⚙️ Configure**: Set up features that match your needs
3. **🎯 Focus**: Enjoy distraction-free, productive YouTube browsing
4. **⭐ Star**: Show support by starring the repository
5. **📢 Share**: Help others discover this productivity tool

### **Join the Community**
- 🐙 **Follow on GitHub**: Stay updated with latest features
- 📧 **Subscribe**: Get notified about major updates
- 💬 **Contribute**: Help make the extension even better
- 🌟 **Spread the word**: Share with friends and colleagues

---

**🎯 Stay focused, stay productive, achieve more!**

*Made with ❤️ by [MK Shaon](https://github.com/mkshaonexe) - Empowering focused, intentional YouTube consumption*

---

> **"The expert in anything was once a beginner. Focus on your growth, eliminate distractions, and let your potential shine."**

**⚡ Transform your YouTube experience today with No Shorts No Distraction YT!**
