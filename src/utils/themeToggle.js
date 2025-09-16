/**
 * Dev utility for toggling between beige, dark, and original themes
 * 
 * Usage in browser console:
 * - toggleTheme() // Cycle through themes
 * - setTheme('beige') // Use UT warm beige theme (default)
 * - setTheme('dark') // Use UT dark theme  
 * - setTheme('original') // Use original teal theme
 */

const themes = ['beige', 'dark', 'original'];

export const toggleTheme = () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme') || 'beige';
  const currentIndex = themes.indexOf(currentTheme);
  const nextIndex = (currentIndex + 1) % themes.length;
  const nextTheme = themes[nextIndex];
  
  setTheme(nextTheme);
};

export const setTheme = (theme) => {
  const html = document.documentElement;
  
  if (theme === 'beige' || theme === 'light' || theme === 'cream') {
    html.removeAttribute('data-theme');
    console.log('🏜️ Set to UT warm beige theme');
  } else if (theme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    console.log('🌙 Set to UT dark theme (navy)');
  } else if (theme === 'original') {
    html.setAttribute('data-theme', 'original');
    console.log('🎨 Set to original theme (teal)');
  }
};

// Make available globally for easy console access
if (typeof window !== 'undefined') {
  window.toggleTheme = toggleTheme;
  window.setTheme = setTheme;
}
