/* PWA registration, installation, and connection-status UI. */
let deferredInstallPrompt = null;
let installButton;

function isInstalled() {
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}

function installHelpMessage() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isIos = /iphone|ipad|ipod/.test(userAgent);
    const isFirefox = /firefox|fxios/.test(userAgent);
    if (isIos) return 'To install this app, tap Share → Add to Home Screen.';
    if (isFirefox && /android/.test(userAgent)) return 'To install this app, open Firefox menu ⋮ and choose Add to Home screen.';
    if (isFirefox) return 'Firefox desktop does not support PWA installation. Open this site in Chrome or Edge to install it.';
    return 'Open your browser menu and choose Install app or Add to Home screen.';
}

function updateInstallButton() {
    installButton = installButton || document.getElementById('installAppButton');
    if (!installButton) return;
    // Chromium/Edge provide a native prompt; Safari and Firefox require instructions.
    installButton.hidden = isInstalled();
}

function showConnectionStatus(message, isOffline = false) {
    const status = document.getElementById('connection-status');
    if (!status) return;
    clearTimeout(showConnectionStatus.timeoutId);
    status.textContent = message;
    status.classList.toggle('offline', isOffline);
    status.hidden = false;
    status.classList.add('show');
    showConnectionStatus.timeoutId = window.setTimeout(() => {
        status.classList.remove('show');
        status.hidden = true;
    }, isOffline ? 5000 : 3000);
}

async function handleInstallClick() {
    if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        await deferredInstallPrompt.userChoice;
        deferredInstallPrompt = null;
        updateInstallButton();
        return;
    }
    showConnectionStatus(installHelpMessage(), true);
}

window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    deferredInstallPrompt = event;
    updateInstallButton();
});
window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    updateInstallButton();
    showConnectionStatus('App installed successfully.');
});
window.addEventListener('offline', () => showConnectionStatus('You’re offline', true));
window.addEventListener('online', () => showConnectionStatus('Back online'));

function initPwa() {
    installButton = document.getElementById('installAppButton');
    installButton?.addEventListener('click', handleInstallClick);
    updateInstallButton();
    if (!navigator.onLine) showConnectionStatus('You’re offline', true);
    if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
        navigator.serviceWorker.register('./service-worker.js')
            .catch(error => console.error('Service worker registration failed:', error));
    }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initPwa, { once: true });
else initPwa();
