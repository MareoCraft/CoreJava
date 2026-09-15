// ==================== COMPLETE DATA ====================
import topicsData from './topicData.js';
import { isAuthenticated, requestGoogleSignIn, trackEvent } from './firebase.js';

// ============ STATE MANAGEMENT ============
let state = {
    currentTopic: null,
    completedTopics: new Set(),
    bookmarkedTopics: new Set(),
    recentTopics: [],
    theme: 'light'
};

const FREE_TOPIC_COUNT = 4;
let pendingLockedTopicId = null;

function topicRequiresSignIn(topicId) {
    return topicsData.findIndex(topic => topic.id === topicId) >= FREE_TOPIC_COUNT;
}

function saveState() {
    localStorage.setItem('coreJavaMasteryState', JSON.stringify({
        completedTopics: Array.from(state.completedTopics),
        bookmarkedTopics: Array.from(state.bookmarkedTopics),
        recentTopics: state.recentTopics,
        theme: state.theme
    }));
}

function loadState() {
    const saved = localStorage.getItem('coreJavaMasteryState');

    if (saved) {
        try {
            const parsed = JSON.parse(saved);

            // Keep only IDs that still exist in the new topicData.js.
            const validIds = new Set(topicsData.map(topic => topic.id));

            state.completedTopics = new Set(
                (parsed.completedTopics || []).filter(id => validIds.has(id))
            );

            state.bookmarkedTopics = new Set(
                (parsed.bookmarkedTopics || []).filter(id => validIds.has(id))
            );

            state.recentTopics = (parsed.recentTopics || [])
                .filter(id => validIds.has(id))
                .slice(0, 5);

            state.theme = parsed.theme || 'light';
        } catch (error) {
            console.warn('Could not load saved state. Starting with clean state.', error);
        }
    }
}

function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', state.theme);
    // Update switch position
    const toggle = document.querySelector('#theme-toggle');
    if (toggle) {
        toggle.checked = state.theme === 'dark';
    }
    saveState();
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    // Update switch position
    const toggle = document.querySelector('#theme-toggle');
    if (toggle) {
        toggle.checked = state.theme === 'dark';
    }
}


function buildSidebar() {
    const sidebarNav = document.getElementById('sidebar-nav');

    // Group every topic by category while preserving the order in topicData.js.
    // This makes the sidebar category-wise even if topicsData is not already grouped.
    const categories = new Map();

    topicsData.forEach(topic => {
        const category = topic.category || 'Other';
        if (!categories.has(category)) {
            categories.set(category, []);
        }
        categories.get(category).push(topic);
    });

    let html = '<ul>';

    categories.forEach((topics, category) => {
        html += `<li class="category">
                    <div> 
                        <i class="fas fa-folder"></i>
                        <span>${category}</span>
                    </div>
                    <i class="fa-solid fa-angles-down"></i>
                </li>`;

        topics.forEach(topic => {
            const isCompleted = state.completedTopics.has(topic.id);
            const isBookmarked = state.bookmarkedTopics.has(topic.id);
            const isActive = state.currentTopic === topic.id;
            const isLocked = topicRequiresSignIn(topic.id) && !isAuthenticated();

            html += `<li class="topic-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}"
                        data-topic-id="${topic.id}" 
                        onclick="navigateToTopic('${topic.id}')">
                        <i class="${isCompleted ? 'fa-solid fa-check' : topic.icon} topic-icon"></i>
                        <span class="topic-name">${topic.title}</span>
                        <span class="topic-status">
                            ${isCompleted ? '<i class="fas fa-check-circle"></i>' : ''}
                            ${isBookmarked ? '<i class="fas fa-bookmark"></i>' : ''}
                            ${isLocked ? '<i class="fas fa-lock" title="Sign in to unlock"></i>' : ''}
                        </span>
                    </li>`;
        });
    });

    html += '</ul>';
    sidebarNav.innerHTML = html;
}

// ============ NAVIGATE WITH HIGHLIGHT ============
function navigateToTopic(topicId) {
    const topic = topicsData.find(t => t.id === topicId);
    if (!topic) return;

    if (topicRequiresSignIn(topicId) && !isAuthenticated()) {
        pendingLockedTopicId = topicId;
        showToast('Sign in with Google to unlock this topic.', 'info');
        requestGoogleSignIn().then(signedIn => {
            if (signedIn && pendingLockedTopicId === topicId) {
                pendingLockedTopicId = null;
                navigateToTopic(topicId);
            }
        });
        return;
    }

    state.currentTopic = topicId;
    trackEvent('view_topic', { topic_id: topicId, topic_name: topic.title });
    state.recentTopics = [topicId, ...state.recentTopics.filter(id => id !== topicId)].slice(0, 5);
    saveState();

    document.getElementById('dashboard-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
    document.getElementById('search-results').classList.remove('active');
    document.getElementById('search-modal').classList.remove('show');

    renderTopic(topic);
    buildSidebar();
    highlightSidebarItem(topicId);   // <-- FIX: Highlight in sidebar
    toggleSidebar(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============ HIGHLIGHT SIDEBAR ITEM ============
function highlightSidebarItem(topicId) {
    const allItems = document.querySelectorAll('.sidebar-nav .topic-item');
    allItems.forEach(item => item.classList.remove('active'));

    const activeItem = document.querySelector(`.sidebar-nav .topic-item[data-topic-id="${topicId}"]`);
    if (activeItem) {
        activeItem.classList.add('active');
        activeItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function showDashboard() {
    state.currentTopic = null;
    document.getElementById('dashboard-view').style.display = 'block';
    document.getElementById('topic-view').style.display = 'none';
    buildSidebar();
    updateDashboard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startLearning() {
    const firstIncomplete = topicsData.find(t => !state.completedTopics.has(t.id));
    if (firstIncomplete) navigateToTopic(firstIncomplete.id);
    else navigateToTopic(topicsData[0].id);
}

function renderTopic(topic) {
    const topicView = document.getElementById('topic-view');
    const prevTopic = topicsData[topicsData.findIndex(t => t.id === topic.id) - 1];
    const nextTopic = topicsData[topicsData.findIndex(t => t.id === topic.id) + 1];
    const isCompleted = state.completedTopics.has(topic.id);
    const isBookmarked = state.bookmarkedTopics.has(topic.id);

    topicView.innerHTML = `
                <div class="topic-header">
                    <h1><i class="${topic.icon}"></i> ${topic.title}</h1>
                    <p>${topic.category}</p>
                    <div class="topic-actions">
                        <button class="action-btn ${isCompleted ? 'active' : ''}" onclick="toggleComplete('${topic.id}')">
                            <i class="fas ${isCompleted ? 'fa-check-circle' : 'fa-circle'}"></i> ${isCompleted ? 'Completed' : 'Mark as Completed'}
                        </button>
                        <button class="action-btn ${isBookmarked ? 'active' : ''}" onclick="toggleBookmark('${topic.id}')">
                            <i class="fas ${isBookmarked ? 'fa-bookmark' : 'fa-bookmark-o'}"></i> ${isBookmarked ? 'Bookmarked' : 'Bookmark'}
                        </button>
                    </div>
                </div>
                <div class="topic-content">${topic.content}</div>
                <div class="topic-navigation">
                    ${prevTopic ? `<button class="nav-btn prev" onclick="navigateToTopic('${prevTopic.id}')"><i class="fas fa-arrow-left"></i><span><strong>Previous</strong></span></button>` : '<div></div>'}
                    ${nextTopic ? `<button class="nav-btn next" onclick="navigateToTopic('${nextTopic.id}')"><span><strong>Next</strong></span><i class="fas fa-arrow-right"></i></button>` : '<div></div>'}
                </div>
            `;

    cleanCodeBlocks();
}

function updateProgress() {
    const total = topicsData.length;
    const completed = state.completedTopics.size;
    const percentage = Math.round((completed / total) * 100);
    document.getElementById('progress-text').textContent = percentage;
    document.getElementById('progress-circle').style.background = `conic-gradient(var(--primary-color) ${percentage}%, var(--border-color) ${percentage}%)`;
    document.getElementById('progress-bar').style.width = percentage + '%';
}

function toggleComplete(topicId) {
    if (state.completedTopics.has(topicId)) {
        state.completedTopics.delete(topicId);
        showToast('Marked as incomplete', 'info');
    } else {
        state.completedTopics.add(topicId);
        trackEvent('complete_topic', { topic_id: topicId });
        showToast('Topic completed! 🎉', 'success');
    }
    saveState();
    const topic = topicsData.find(t => t.id === topicId);
    renderTopic(topic);
    buildSidebar();
    updateDashboard();
    updateProgress();
}

function toggleBookmark(topicId) {
    if (state.bookmarkedTopics.has(topicId)) {
        state.bookmarkedTopics.delete(topicId);
        showToast('Bookmark removed', 'info');
    } else {
        state.bookmarkedTopics.add(topicId);
        showToast('Bookmarked! ⭐', 'success');
    }
    saveState();
    const topic = topicsData.find(t => t.id === topicId);
    renderTopic(topic);
    buildSidebar();
    updateDashboard();
}

function updateDashboard() {
    const total = topicsData.length;
    const completed = state.completedTopics.size;
    const remaining = total - completed;
    const bookmarks = state.bookmarkedTopics.size;
    document.getElementById('stat-topics').textContent = total;
    document.getElementById('stat-completed').textContent = completed;
    document.getElementById('stat-remaining').textContent = remaining;
    document.getElementById('stat-bookmarks').textContent = bookmarks;
    document.getElementById('bookmark-count').textContent = bookmarks;

    const continueCard = document.getElementById('continue-learning');
    const lastTopic = state.recentTopics[0];
    if (lastTopic) {
        const topic = topicsData.find(t => t.id === lastTopic);

        if (topic) {
            continueCard.innerHTML = `<h3><i class="fas fa-play-circle"></i> ${topic.title}</h3><p>${topic.category}</p><small>Click to continue</small>`;
            continueCard.onclick = () => navigateToTopic(topic.id);
        } else {
            state.recentTopics = [];
            saveState();
            updateDashboard();
            return;
        }
    } else {
        const firstTopic = topicsData[0];
        continueCard.innerHTML = `<h3><i class="fas fa-play-circle"></i> ${firstTopic.title}</h3><p>${firstTopic.category}</p><small>Start your Java journey!</small>`;
        continueCard.onclick = () => navigateToTopic(firstTopic.id);
    }

    const recentDiv = document.getElementById('recent-topics');
    if (state.recentTopics.length > 0) {
        recentDiv.innerHTML = state.recentTopics.map(id => {
            const t = topicsData.find(x => x.id === id);
            if (!t) return '';
            return `<div class="recent-topic-item" onclick="navigateToTopic('${t.id}')"><i class="${t.icon}"></i><span>${t.title}</span></div>`;
        }).join('');
    } else {
        recentDiv.innerHTML = '<p class="empty-state">No recently viewed topics yet.</p>';
    }

    const bookmarkedDiv = document.getElementById('bookmarked-topics');
    if (state.bookmarkedTopics.size > 0) {
        bookmarkedDiv.innerHTML = Array.from(state.bookmarkedTopics).map(id => {
            const t = topicsData.find(x => x.id === id);
            if (!t) return '';
            return `<div class="recent-topic-item" onclick="navigateToTopic('${t.id}')"><i class="${t.icon}"></i><span>${t.title}</span></div>`;
        }).join('');
    } else {
        bookmarkedDiv.innerHTML = '<p class="empty-state">No bookmarks yet.</p>';
    }

    // Popular topics
    const popDiv = document.getElementById('popular-topics');
    popDiv.innerHTML = topicsData.slice(0, 6).map(t => `<div class="topic-pill" onclick="navigateToTopic('${t.id}')">${t.title}</div>`).join('');
}

// ============ SEARCH (Already calls navigateToTopic) ============
function handleSearch(query) {
    const resultsDiv = document.getElementById('search-results');
    const q = query.toLowerCase().trim();

    if (q.length >= 2) trackEvent('search_topic', { search_term: q });

    if (q.length < 2) {
        resultsDiv.classList.remove('active');
        resultsDiv.innerHTML = '';
        return;
    }

    const results = topicsData.filter(topic =>
        topic.title.toLowerCase().includes(q) ||
        topic.category.toLowerCase().includes(q) ||
        topic.content.toLowerCase().includes(q)
    );

    if (results.length > 0) {
        resultsDiv.innerHTML = results.slice(0, 10).map(topic => `
            <div class="search-result-item" onclick="navigateToTopic('${topic.id}')">
                <i class="${topic.icon}"></i>
                <span>${topic.title}</span>
            </div>
        `).join('');
        resultsDiv.classList.add('active');
    } else {
        resultsDiv.innerHTML = '<div class="search-result-item"><i class="fas fa-search"></i><span>No results found</span></div>';
        resultsDiv.classList.add('active');
    }
}

function showBookmarks() {
    const modal = document.createElement('div');
    modal.className = 'modal show';

    const bookmarkItems = Array.from(state.bookmarkedTopics)
        .map(id => topicsData.find(x => x.id === id))
        .filter(Boolean);

    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-bookmark"></i> Your Bookmarks</h3>
                <button class="close-modal" onclick="this.closest('.modal').remove()">×</button>
            </div>
            <div class="modal-body">
                ${bookmarkItems.length > 0
            ? bookmarkItems.map(t => `
                        <div class="recent-topic-item"
                             onclick="navigateToTopic('${t.id}'); this.closest('.modal').remove();">
                            <i class="${t.icon}"></i>
                            <span>${t.title}</span>
                        </div>
                    `).join('')
            : '<p class="empty-state">No bookmarks yet.</p>'}
            </div>
        </div>`;
    document.body.appendChild(modal);
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i> ${message}`;
    toast.className = `toast show ${type}`;
    setTimeout(() => toast.classList.remove('show'), 4000);
}

function copyCode(btn) {
    const codeBlock = btn.closest('.code-block');
    const code = codeBlock.querySelector('code').textContent;
    navigator.clipboard.writeText(code).then(() => {
        showToast('Code copied to clipboard!', 'success');
        btn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => btn.innerHTML = '<i class="fas fa-copy"></i>', 2000);
    });
}

function toggleSidebar(force) {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('mobile-overlay');
    if (force === false) { sidebar.classList.remove('open'); overlay.classList.remove('show'); return; }
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
}

// Open the mobile search modal
function openSearchModal() {
    const modal = document.getElementById('search-modal');
    modal.classList.add('show');
    setTimeout(() => {
        document.getElementById('search-input').focus();
    }, 100);
}

// Close the mobile search modal
function closeSearchModal() {
    const modal = document.getElementById('search-modal');
    modal.classList.remove('show');
    document.getElementById('search-results').innerHTML = '';
    document.getElementById('search-input').value = '';
}

// Toggle modal from the navbar button
function toggleMobileSearch() {
    const modal = document.getElementById('search-modal');
    if (modal.classList.contains('show')) {
        closeSearchModal();
    } else {
        openSearchModal();
    }
}

const mobileSearchBtn = document.getElementById('mobile-search-btn');
if (mobileSearchBtn) {
    mobileSearchBtn.addEventListener('click', toggleMobileSearch);
}

const backdrop = document.querySelector('.search-modal-backdrop');
if (backdrop) {
    backdrop.addEventListener('click', closeSearchModal);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.getElementById('search-modal').classList.contains('show')) {
        closeSearchModal();
    }
});

// ============ REMOVE LEADING WHITESPACE FROM CODE BLOCKS ============
function cleanCodeBlocks() {
    const codeBlocks = document.querySelectorAll('.code-block pre code');
    codeBlocks.forEach(block => {
        const lines = block.innerHTML.split('\n');

        // Remove first empty line if exists
        if (lines[0] && lines[0].trim() === '') lines.shift();

        // Remove last empty line if exists
        if (lines[lines.length - 1] && lines[lines.length - 1].trim() === '') lines.pop();

        // Find minimum indentation across all non-empty lines
        let minIndent = Infinity;
        lines.forEach(line => {
            if (line.trim() === '') return;
            const match = line.match(/^(\s*)/);
            if (match && match[1].length < minIndent) {
                minIndent = match[1].length;
            }
        });

        if (minIndent === Infinity) minIndent = 0;

        // Remove the common indentation from each line
        const cleaned = lines.map(line => line.substring(minIndent)).join('\n');
        block.innerHTML = cleaned;
    });
}

// Run this inside your init() function or on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    cleanCodeBlocks();
});

function openThreadModal() {
    document.getElementById('threadModal').style.display = 'flex';
}

function closeThreadModal() {
    document.getElementById('threadModal').style.display = 'none';
}

function init() {
    loadState();
    applyTheme();
    buildSidebar();
    updateDashboard();
    updateProgress();
    cleanCodeBlocks();
    showToast('Sign In With Google To Access All Topics', 'error');

    document.getElementById('menu-btn').addEventListener('click', () => toggleSidebar());
    document.getElementById('mobile-overlay').addEventListener('click', () => toggleSidebar(false));

    // FIXED: Add proper input event listener
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));

    // FIXED: Prevent outside click from hiding results immediately
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim().length >= 2) {
            document.getElementById('search-results').classList.add('active');
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box')) {
            document.getElementById('search-results').classList.remove('active');
        }
    });

    // In the existing init() or document click listener:
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.search-box')) {
            // hide results only if not inside search box
            const results = document.getElementById('search-results');
            if (results) results.classList.remove('active');
        }
    });
}

// ============ GLOBAL FUNCTIONS ============
// Keep existing inline HTML onclick handlers working when script.js is a module.
window.navigateToTopic = navigateToTopic;
window.showDashboard = showDashboard;
window.startLearning = startLearning;
window.toggleComplete = toggleComplete;
window.toggleBookmark = toggleBookmark;
window.showBookmarks = showBookmarks;
window.toggleTheme = toggleTheme;
window.copyCode = copyCode;
window.showToast = showToast;
window.toggleSidebar = toggleSidebar;
window.toggleMobileSearch = toggleMobileSearch;
window.openThreadModal = openThreadModal;
window.closeThreadModal = closeThreadModal;

document.addEventListener('DOMContentLoaded', init);
document.addEventListener('firebase-auth-state-changed', () => buildSidebar());
