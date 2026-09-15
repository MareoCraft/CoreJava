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
            const validIds = new Set(topicsData.map(topic => topic.id));
            state.completedTopics = new Set((parsed.completedTopics || []).filter(id => validIds.has(id)));
            state.bookmarkedTopics = new Set((parsed.bookmarkedTopics || []).filter(id => validIds.has(id)));
            state.recentTopics = (parsed.recentTopics || []).filter(id => validIds.has(id)).slice(0, 5);
            state.theme = parsed.theme || 'light';
        } catch (error) {
            console.warn('Could not load saved state.', error);
        }
    }
}

function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.theme);
    const toggle = document.querySelector('#theme-toggle');
    if (toggle) toggle.checked = state.theme === 'dark';
    saveState();
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    const toggle = document.querySelector('#theme-toggle');
    if (toggle) toggle.checked = state.theme === 'dark';
}

function buildSidebar() {
    const sidebarNav = document.getElementById('sidebar-nav');
    const categories = new Map();
    topicsData.forEach(topic => {
        const category = topic.category || 'Other';
        if (!categories.has(category)) categories.set(category, []);
        categories.get(category).push(topic);
    });

    let html = '<ul>';
    categories.forEach((topics, category) => {
        html += `<li class="category"><div><i class="fas fa-folder"></i><span>${category}</span></div><i class="fa-solid fa-angles-down"></i></li>`;
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
    highlightSidebarItem(topicId);
    toggleSidebar(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function highlightSidebarItem(topicId) {
    document.querySelectorAll('.sidebar-nav .topic-item').forEach(item => item.classList.remove('active'));
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
    enhanceCodeBlocks();
}

function updateProgress() {
    const total = topicsData.length;
    const completed = state.completedTopics.size;
    const percentage = Math.round((completed / total) * 100);
    document.getElementById('progress-text').textContent = percentage;
    document.getElementById('progress-circle').style.background = `conic-gradient(var(--primary-color) ${percentage}%, var(--border-color) ${percentage}%)`;
    document.getElementById('progress-bar').style.width = percentage + '%';
}

/* =====================================================================
   JAVA CODE RUNNER — WITH USER INPUT SUPPORT
   ===================================================================== */

function copyCode(btn) {
    const block = btn.closest('.code-block');
    const text = block.querySelector('code').textContent.trim();
    navigator.clipboard.writeText(text).then(() => {
        const icon = btn.querySelector('i');
        const old = icon.className;
        icon.className = 'fas fa-check';
        showToast('Code copied!', 'success');
        setTimeout(() => icon.className = old, 1500);
    });
}

function codeNeedsInput(raw) {
    return /\bIO\s*\.\s*readln\s*\(/.test(raw) ||
           /new\s+Scanner\s*\(/.test(raw) ||
           /System\.in/.test(raw) ||
           /\.nextInt\s*\(/.test(raw) ||
           /\.nextLine\s*\(/.test(raw) ||
           /\.nextDouble\s*\(/.test(raw) ||
           /\.next\s*\(/.test(raw) ||
           /\.readLine\s*\(/.test(raw);
}

/* ---------- CREATE STDIN INPUT UI ---------- */
function createStdinInput(block) {
    let wrapper = block.querySelector('.code-stdin-wrapper');
    if (wrapper) return wrapper.querySelector('.code-stdin');

    wrapper = document.createElement('div');
    wrapper.className = 'code-stdin-wrapper';
    wrapper.innerHTML = `
        <div class="code-stdin-header">
            <i class="fas fa-keyboard"></i>
            <span>Program Input</span>
            <small>(Enter one value per line, in the order the program asks)</small>
        </div>
        <textarea class="code-stdin" 
                  placeholder="Example:&#10;Ravi&#10;12345"
                  rows="3"></textarea>
    `;
    const output = block.querySelector('.code-output');
    if (output) block.insertBefore(wrapper, output);
    else block.appendChild(wrapper);
    return wrapper.querySelector('.code-stdin');
}

/* ---------- EXTRACT PROMPT STRINGS FROM JAVA CODE ---------- */
function extractPromptsFromCode(raw) {
    const prompts = [];
    // Match: IO.print("...") or IO.println("...") or System.out.print("...")
    // The prompt usually ends with ':' or a question mark
    const regex = /(?:IO|System\s*\.\s*out)\s*\.\s*(?:print|println)\s*\(\s*"([^"]*)"\s*\)/g;
    let match;
    while ((match = regex.exec(raw)) !== null) {
        const text = match[1].trim();
        // Only keep strings that look like prompts (end with : or ?)
        if (/(:|：|\?)$/.test(text)) {
            prompts.push(text);
        }
    }
    return prompts;
}

/* ---------- SOURCE PREPARATION ---------- */
/* ---------- SOURCE PREPARATION (removes prompts from output) ---------- */
function prepareJavaSource(raw) {
    let source = raw
        .replace(/^\s*package\s+[\w.]+\s*;\s*$/gm, '')
        .replace(/\bpublic\s+class\s+\w+/, 'public class Main')
        .trim();

    // ✅ STEP 1: Remove prompt-style print statements
    //    Anything that ends with ":" or "?" is treated as a prompt
    //    and stripped out so it doesn't appear in the output.
    source = source.replace(
        /(?:IO|System\s*\.\s*out)\s*\.\s*print(?:ln)?\s*\(\s*"([^"]*[:?])\s*"\s*\)\s*;/g,
        ''
    );

    // ✅ STEP 2: Handle IO.readln → __readLine() (no prompt shown)
    const usesIOReadln = /\bIO\s*\.\s*readln\s*\(/.test(source);
    if (usesIOReadln) {
        source = source.replace(/\bIO\s*\.\s*readln\s*\(\s*"[^"]*"\s*\)/g, '__readLine()');
        source = source.replace(/\bIO\s*\.\s*readln\s*\(\s*\)/g, '__readLine()');
    }

    // ✅ STEP 3: Replace remaining IO.xxx with System.out.xxx
    source = source
        .replace(/\bIO\s*\.\s*println\s*\(/g, 'System.out.println(')
        .replace(/\bIO\s*\.\s*print\s*\(/g, 'System.out.print(');

    // ✅ STEP 4: Inject __readLine helper if needed
    if (usesIOReadln) {
        const helper = `
    private static java.io.BufferedReader __reader = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
    private static String __readLine() {
        try { return __reader.readLine(); } catch(Exception e) { return null; }
    }
`;
        source = source.replace(/(public\s+class\s+Main\s*\{)/, '$1' + helper);
    }

    return source;
}

function cleanJvmNoise(s) {
    if (!s) return '';
    return s.split('\n').filter(l => !/^(Picked up|NOTE:|WARNING:)/.test(l.trim())).join('\n').trim();
}

function fetchWithTimeout(url, options, ms = 30000) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), ms);
    return fetch(url, { ...options, signal: ctrl.signal }).finally(() => clearTimeout(t));
}

/* ---------- BACKEND 1: WANDBOX ---------- */
let wandboxCompilerCache = null;

async function pickWandboxJavaCompiler() {
    if (wandboxCompilerCache) return wandboxCompilerCache;
    const res = await fetchWithTimeout('https://wandbox.org/api/list.json', {}, 15000);
    if (!res.ok) throw new Error('Wandbox list HTTP ' + res.status);
    const list = await res.json();
    const candidates = list
        .filter(c => /java/i.test(c.language || '') || /^openjdk/i.test(c.name || ''))
        .map(c => {
            const m = /jdk-(\d+)/i.exec(c.name || '');
            const major = m ? parseInt(m[1], 10) : (/head/i.test(c.name || '') ? 99 : 0);
            return { name: c.name, major };
        })
        .filter(c => c.major >= 16)
        .sort((a, b) => b.major - a.major);
    if (!candidates.length) throw new Error('Wandbox has no Java 16+ compiler');
    wandboxCompilerCache = candidates[0].name;
    return wandboxCompilerCache;
}

async function runWandbox(source, stdin = '') {
    const compiler = await pickWandboxJavaCompiler();
    const res = await fetchWithTimeout('https://wandbox.org/api/compile.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ compiler, code: source, stdin })
    });
    if (!res.ok) throw new Error('Wandbox HTTP ' + res.status);
    const data = await res.json();
    const compileErr = cleanJvmNoise(data.compiler_error);
    if (compileErr) return { error: compileErr };
    const out = [cleanJvmNoise(data.program_output), cleanJvmNoise(data.program_error)].filter(Boolean).join('\n');
    return { output: out || '(program produced no output)' };
}

/* ---------- BACKEND 2: JUDGE0 ---------- */
async function runJudge0(source, stdin = '') {
    const ids = [91, 62];
    let lastErr = null;
    for (const language_id of ids) {
        try {
            const res = await fetchWithTimeout(
                'https://ce.judge0.com/submissions?wait=true&base64_encoded=false',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ source_code: source, language_id, stdin })
                }
            );
            if (!res.ok) throw new Error('Judge0 HTTP ' + res.status);
            const data = await res.json();
            if (data.compile_output && data.compile_output.trim()) {
                return { error: cleanJvmNoise(data.compile_output) };
            }
            const out = [cleanJvmNoise(data.stdout), cleanJvmNoise(data.stderr)].filter(Boolean).join('\n');
            return { output: out || '(program produced no output)' };
        } catch (e) { lastErr = e; }
    }
    throw lastErr || new Error('Judge0 unavailable');
}

/* ---------- BACKEND 3: PISTON ---------- */
async function runPiston(source, stdin = '') {
    const res = await fetchWithTimeout('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            language: 'java',
            version: '*',
            files: [{ name: 'Main.java', content: source }],
            stdin
        })
    });
    if (!res.ok) throw new Error('Piston HTTP ' + res.status);
    const data = await res.json();
    if (data.compile && data.compile.stderr) {
        return { error: cleanJvmNoise(data.compile.stderr) };
    }
    const run = data.run || {};
    const out = [cleanJvmNoise(run.stdout), cleanJvmNoise(run.stderr)].filter(Boolean).join('\n');
    return { output: out || '(program produced no output)' };
}

async function runWithFallback(source, stdin = '') {
    const services = [
        ['Wandbox', (s) => runWandbox(s, stdin)],
        ['Judge0', (s) => runJudge0(s, stdin)],
        ['Piston', (s) => runPiston(s, stdin)]
    ];
    const failures = [];
    for (const [name, fn] of services) {
        try {
            const result = await fn(source);
            if (result && (result.output || result.error)) return result;
        } catch (e) {
            failures.push(`${name}: ${e.message}`);
        }
    }
    throw new Error('Every execution service failed.\n\n' + failures.join('\n') + '\n\nCheck your internet connection.');
}

/* ---------- RUN BUTTON HANDLER (minimal input, no prompts) ---------- */
async function runCode(btn) {
    const block = btn.closest('.code-block');
    if (!block) return;

    let out = block.querySelector('.code-output');
    if (!out) {
        out = document.createElement('pre');
        out.className = 'code-output';
        out.hidden = true;
        block.appendChild(out);
    }

    const icon = btn.querySelector('i');
    const raw = block.querySelector('code').textContent;
    const source = prepareJavaSource(raw);
    const needsInput = codeNeedsInput(raw);

    let stdin = '';

    if (needsInput) {
        let wrapper = block.querySelector('.code-stdin-wrapper');
        if (!wrapper) {
            wrapper = document.createElement('div');
            wrapper.className = 'code-stdin-wrapper';
            wrapper.innerHTML = `<textarea class="code-stdin" placeholder="Enter input (one value per line)" rows="4"></textarea>`;
            if (out) block.insertBefore(wrapper, out);
            else block.appendChild(wrapper);

            const ta = wrapper.querySelector('.code-stdin');
            if (ta) ta.focus();

            out.hidden = false;
            out.classList.remove('error', 'loading');
            out.textContent = 'Enter the input above, then click ▶ Run again.';
            return;
        }

        const stdinField = wrapper.querySelector('.code-stdin');
        stdin = (stdinField.value || '').trim();

        if (!stdin) {
            out.hidden = false;
            out.classList.remove('loading');
            out.classList.add('error');
            out.textContent = 'Input is empty.';
            return;
        }
    }

    out.hidden = false;
    out.classList.remove('error');
    out.classList.add('loading');
    out.textContent = '⏳ Running...';

    btn.disabled = true;
    icon.className = 'fas fa-spinner fa-spin';

    try {
        const result = await runWithFallback(source, stdin);
        out.classList.remove('loading');
        if (result.error) {
            out.classList.add('error');
            out.textContent = '❌ ' + result.error;
        } else {
            out.textContent = '✅ Output:\n' + result.output;
        }
    } catch (err) {
        out.classList.remove('loading');
        out.classList.add('error');
        out.textContent = '⚠ ' + err.message;
    } finally {
        btn.disabled = false;
        icon.className = 'fas fa-play';
    }
}

window.copyCode = copyCode;
window.runCode = runCode;

/* ---------- GUESS INPUT HINT BASED ON CODE ---------- */
function guessInputHint(raw) {
    // Look for common loop patterns that hint at iteration count
    const forLoopMatch = raw.match(/for\s*\([^;]+;\s*\w+\s*<\s*(\w+)\s*\.\s*length/);
    const arraySizeMatch = raw.match(/new\s+\w+\s*\[\s*(\d+)\s*\]/);
    const fixedLoopMatch = raw.match(/for\s*\([^;]+;\s*\w+\s*<\s*(\d+)\s*;/);

    let count = null;
    if (arraySizeMatch) count = parseInt(arraySizeMatch[1], 10);
    else if (fixedLoopMatch) count = parseInt(fixedLoopMatch[1], 10);

    const readsCount = (raw.match(/IO\s*\.\s*readln|Scanner|\.nextInt\(|\.nextLine\(|\.next\(\)/g) || []).length;

    if (count && count > 1) {
        return `(≈ ${count} iteration(s) × ${Math.max(1, Math.round(readsCount / count))} value(s) each)`;
    }
    if (readsCount > 0) {
        return `(≈ ${readsCount} value(s) needed)`;
    }
    return '(Enter one value per line)';
}

/* ---------- BUILD PLACEHOLDER BASED ON HINT ---------- */
function buildPlaceholder(hint) {
    const m = hint.match(/≈ (\d+)/);
    if (m) {
        const n = parseInt(m[1], 10);
        if (n <= 5) {
            return Array.from({ length: n }, (_, i) => `value ${i + 1}`).join('\n');
        }
        return Array.from({ length: 5 }, (_, i) => `value ${i + 1}`).join('\n') + '\n...';
    }
    return 'Enter one value per line';
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

    const popDiv = document.getElementById('popular-topics');
    popDiv.innerHTML = topicsData.slice(0, 6).map(t => `<div class="topic-pill" onclick="navigateToTopic('${t.id}')">${t.title}</div>`).join('');
}

function handleSearch(query) {
    const resultsDiv = document.getElementById('search-results');
    const q = query.toLowerCase().trim();
    if (q.length >= 2) trackEvent('search_topic', { search_term: q });
    if (q.length < 2) { resultsDiv.classList.remove('active'); resultsDiv.innerHTML = ''; return; }
    const results = topicsData.filter(topic =>
        topic.title.toLowerCase().includes(q) ||
        topic.category.toLowerCase().includes(q) ||
        topic.content.toLowerCase().includes(q)
    );
    if (results.length > 0) {
        resultsDiv.innerHTML = results.slice(0, 10).map(topic => `
            <div class="search-result-item" onclick="navigateToTopic('${topic.id}')">
                <i class="${topic.icon}"></i><span>${topic.title}</span>
            </div>`).join('');
        resultsDiv.classList.add('active');
    } else {
        resultsDiv.innerHTML = '<div class="search-result-item"><i class="fas fa-search"></i><span>No results found</span></div>';
        resultsDiv.classList.add('active');
    }
}

function showBookmarks() {
    const modal = document.createElement('div');
    modal.className = 'modal show';
    const bookmarkItems = Array.from(state.bookmarkedTopics).map(id => topicsData.find(x => x.id === id)).filter(Boolean);
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-bookmark"></i> Your Bookmarks</h3>
                <button class="close-modal" onclick="this.closest('.modal').remove()">×</button>
            </div>
            <div class="modal-body">
                ${bookmarkItems.length > 0
            ? bookmarkItems.map(t => `
                        <div class="recent-topic-item" onclick="navigateToTopic('${t.id}'); this.closest('.modal').remove();">
                            <i class="${t.icon}"></i><span>${t.title}</span>
                        </div>`).join('')
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

function toggleSidebar(force) {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('mobile-overlay');
    if (force === false) { sidebar.classList.remove('open'); overlay.classList.remove('show'); return; }
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
}

function openSearchModal() {
    const modal = document.getElementById('search-modal');
    modal.classList.add('show');
    setTimeout(() => document.getElementById('search-input').focus(), 100);
}

function closeSearchModal() {
    const modal = document.getElementById('search-modal');
    modal.classList.remove('show');
    document.getElementById('search-results').innerHTML = '';
    document.getElementById('search-input').value = '';
}

function toggleMobileSearch() {
    const modal = document.getElementById('search-modal');
    if (modal.classList.contains('show')) closeSearchModal();
    else openSearchModal();
}

const mobileSearchBtn = document.getElementById('mobile-search-btn');
if (mobileSearchBtn) mobileSearchBtn.addEventListener('click', toggleMobileSearch);

const backdrop = document.querySelector('.search-modal-backdrop');
if (backdrop) backdrop.addEventListener('click', closeSearchModal);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.getElementById('search-modal').classList.contains('show')) {
        closeSearchModal();
    }
});

function cleanCodeBlocks() {
    const codeBlocks = document.querySelectorAll('.code-block pre code');
    codeBlocks.forEach(block => {
        const lines = block.innerHTML.split('\n');
        if (lines[0] && lines[0].trim() === '') lines.shift();
        if (lines[lines.length - 1] && lines[lines.length - 1].trim() === '') lines.pop();
        let minIndent = Infinity;
        lines.forEach(line => {
            if (line.trim() === '') return;
            const match = line.match(/^(\s*)/);
            if (match && match[1].length < minIndent) minIndent = match[1].length;
        });
        if (minIndent === Infinity) minIndent = 0;
        const cleaned = lines.map(line => line.substring(minIndent)).join('\n');
        block.innerHTML = cleaned;
    });
}

/* ---------- AUTO-INJECT RUN BUTTONS + INPUT UI ---------- */
/* ---------- AUTO-INJECT RUN BUTTONS (only if code has main method) ---------- */
function enhanceCodeBlocks() {
    document.querySelectorAll('.code-block').forEach(block => {
        const header = block.querySelector('.code-header');
        if (!header) return;

        const codeEl = block.querySelector('code');
        if (!codeEl) return;

        // Detect if this code block has a main method
        const codeText = codeEl.textContent || '';
        const hasMain = /\b(public\s+)?(static\s+)?void\s+main\s*\(/.test(codeText) ||
                        /\bvoid\s+main\s*\(\s*String\s*\[\s*\]\s*\w*\s*\)/.test(codeText) ||
                        /\bvoid\s+main\s*\(\s*\)/.test(codeText);

        // If already processed, skip
        if (header.querySelector('.code-actions')) {
            // Ensure output panel exists (only if hasMain)
            if (hasMain && !block.querySelector('.code-output')) {
                const output = document.createElement('pre');
                output.className = 'code-output';
                output.hidden = true;
                block.appendChild(output);
            }
            return;
        }

        const copyBtn = header.querySelector('.copy-btn');

        // Create actions wrapper
        const actions = document.createElement('div');
        actions.className = 'code-actions';

        // ✅ Only add Run button if code has main method
        if (hasMain) {
            const runBtn = document.createElement('button');
            runBtn.className = 'run-btn';
            runBtn.title = 'Run Code';
            runBtn.innerHTML = '<i class="fas fa-play"></i>';
            runBtn.onclick = function (e) {
                e.preventDefault();
                runCode(this);
            };
            actions.appendChild(runBtn);
        }

        // Move copy button into actions
        if (copyBtn) {
            copyBtn.parentNode.removeChild(copyBtn);
            actions.appendChild(copyBtn);
        }

        header.appendChild(actions);

        // ✅ Only add output panel if code has main method
        if (hasMain && !block.querySelector('.code-output')) {
            const output = document.createElement('pre');
            output.className = 'code-output';
            output.hidden = true;
            block.appendChild(output);
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    cleanCodeBlocks();
    enhanceCodeBlocks();
});

function openThreadModal() { document.getElementById('threadModal').style.display = 'flex'; }
function closeThreadModal() { document.getElementById('threadModal').style.display = 'none'; }

function init() {
    loadState();
    applyTheme();
    buildSidebar();
    updateDashboard();
    updateProgress();
    cleanCodeBlocks();
    enhanceCodeBlocks();
    showToast('Sign In With Google To Access All Topics', 'error');

    document.getElementById('menu-btn').addEventListener('click', () => toggleSidebar());
    document.getElementById('mobile-overlay').addEventListener('click', () => toggleSidebar(false));

    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim().length >= 2) document.getElementById('search-results').classList.add('active');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box')) {
            document.getElementById('search-results').classList.remove('active');
        }
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.search-box')) {
            const results = document.getElementById('search-results');
            if (results) results.classList.remove('active');
        }
    });
}

// ============ GLOBAL FUNCTIONS ============
window.navigateToTopic = navigateToTopic;
window.showDashboard = showDashboard;
window.startLearning = startLearning;
window.toggleComplete = toggleComplete;
window.toggleBookmark = toggleBookmark;
window.showBookmarks = showBookmarks;
window.toggleTheme = toggleTheme;
window.copyCode = copyCode;
window.runCode = runCode;
window.showToast = showToast;
window.toggleSidebar = toggleSidebar;
window.toggleMobileSearch = toggleMobileSearch;
window.openThreadModal = openThreadModal;
window.closeThreadModal = closeThreadModal;
window.enhanceCodeBlocks = enhanceCodeBlocks;

document.addEventListener('DOMContentLoaded', init);
document.addEventListener('firebase-auth-state-changed', () => buildSidebar());