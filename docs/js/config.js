// =============================================
// I18n Data
// =============================================
const ABOUT_ICONS = {
  pin: `<img class="about-inline-img" src="assets/icons/locationn.svg" alt="" focusable="false" />`,
  monitor: `<img class="about-inline-img" src="assets/icons/ram.svg" alt="" focusable="false" />`,
  bug: `<img class="about-inline-img about-icon-bigger" src="assets/icons/experiment.svg" alt="" focusable="false" />`,
  palette: `<svg class="about-inline-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" focusable="false"><path d="M12 3a9 9 0 0 0 0 18h1.2a1.8 1.8 0 0 0 1.1-3.2 1.8 1.8 0 0 1 1.1-3.2H17a4 4 0 0 0 4-4.1A8.8 8.8 0 0 0 12 3Z"/><circle cx="7.5" cy="10" r=".7" fill="currentColor" stroke="none"/><circle cx="10" cy="7" r=".7" fill="currentColor" stroke="none"/><circle cx="14" cy="7" r=".7" fill="currentColor" stroke="none"/></svg>`,
};
let persona = localStorage.getItem('persona') || 'lioexp';

const YT_API_KEY = ''; // YouTube Data API v3: https://console.cloud.google.com
const YT_CHANNEL_ID = 'UCZIZwWoayEW1CXxqE0TwyLQ';
const YT_FEED_LIMIT = 12;
const YT_SCROLL_SPEED = 0.6;

// =============================================
// State
// =============================================
let lang = localStorage.getItem('lang') || 'en';
document.documentElement.lang = lang;
let openProjects = {};
let briefingOpen = false;
let ytSubscriberCount = null;
let ytAnimId = null;
let ytPaused = false;
let lastFocused = null;
