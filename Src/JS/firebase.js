import { getApp, getApps, initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';
import { getAnalytics, isSupported, logEvent } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js';
import { GoogleAuthProvider, browserLocalPersistence, getAuth, onAuthStateChanged, setPersistence, signInWithPopup, signOut } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js';

// Firebase web configuration supplied for this project. This is not an Admin credential.
const firebaseConfig = {
  apiKey: "AIzaSyDAq-McHWY3KEUF9M-EgrXJIW9dGk1WCV0",
  authDomain: "corej-a16a2.firebaseapp.com",
  projectId: "corej-a16a2",
  storageBucket: "corej-a16a2.firebasestorage.app",
  messagingSenderId: "711994118950",
  appId: "1:711994118950:web:04b34dcb87e42fe10327e7",
  measurementId: "G-18VRVQRMQM"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
let analytics = null;
isSupported().then(supported => { if (supported) analytics = getAnalytics(app); }).catch(() => {});

export function trackEvent(name, params = {}) { if (analytics) logEvent(analytics, name, params); }
function notify(message, type = 'info') { window.showToast?.(message, type); }

function updateProfile(user) {
    const signInButton = document.getElementById('googleSignInButton');
    const summary = document.getElementById('profileSummary');
    const dropdown = document.getElementById('profileDropdown');
    if (!signInButton || !summary || !dropdown) return;
    signInButton.hidden = Boolean(user); summary.hidden = !user; dropdown.hidden = true; summary.setAttribute('aria-expanded', 'false');
    if (!user) return;
    const name = user.displayName || 'Google user'; const email = user.email || ''; const photo = user.photoURL || './Public/Images/java.png';
    const profilePhoto = document.getElementById('profilePhoto');
    profilePhoto.onerror = () => { profilePhoto.onerror = null; profilePhoto.src = './Public/Images/java.png'; };
    profilePhoto.src = photo; profilePhoto.alt = `${name} profile photo`;
    const dropdownPhoto = document.getElementById('dropdownPhoto');
    dropdownPhoto.onerror = () => { dropdownPhoto.onerror = null; dropdownPhoto.src = './Public/Images/java.png'; };
    dropdownPhoto.src = photo; dropdownPhoto.alt = `${name} profile photo`;
    document.getElementById('profileName').textContent = name; document.getElementById('profileEmail').textContent = email;
    document.getElementById('dropdownName').textContent = name; document.getElementById('dropdownEmail').textContent = email;
}

async function signInWithGoogle() {
    try {
        const result = await signInWithPopup(auth, provider);
        trackEvent('login', { method: 'google' }); notify(`Welcome, ${result.user.displayName || 'there'}!`, 'success');
    } catch (error) {
        const messages = {
            'auth/popup-closed-by-user': 'Google sign-in was cancelled.',
            'auth/popup-blocked': 'Your browser blocked the sign-in popup. Please allow popups and try again.',
            'auth/unauthorized-domain': 'This domain is not authorized in Firebase. Add it in Authentication → Settings → Authorized domains.',
            'auth/network-request-failed': 'Sign-in needs an internet connection. Please try again when online.'
        };
        console.error('Google sign-in failed:', error); notify(messages[error.code] || 'Unable to sign in with Google. Please try again.', 'error');
    }
}
async function signOutUser() { try { await signOut(auth); notify('Signed out successfully.'); } catch (error) { console.error('Sign-out failed:', error); notify('Unable to sign out. Please try again.', 'error'); } }

function initAccountUi() {
    document.getElementById('googleSignInButton')?.addEventListener('click', signInWithGoogle);
    document.getElementById('googleSignOutButton')?.addEventListener('click', signOutUser);
    document.getElementById('profileSummary')?.addEventListener('click', event => {
        const dropdown = document.getElementById('profileDropdown'); const isOpen = dropdown.hidden;
        dropdown.hidden = !isOpen; event.currentTarget.setAttribute('aria-expanded', String(isOpen));
    });
    document.addEventListener('click', event => {
        const profile = document.getElementById('sidebar-profile');
        const dropdown = document.getElementById('profileDropdown');
        const summary = document.getElementById('profileSummary');
        if (profile && !profile.contains(event.target) && !dropdown.hidden) {
            dropdown.hidden = true;
            summary.setAttribute('aria-expanded', 'false');
        }
    });
    setPersistence(auth, browserLocalPersistence).catch(error => console.warn('Could not set auth persistence:', error));
    onAuthStateChanged(auth, updateProfile);
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initAccountUi, { once: true }); else initAccountUi();
