const toggleThemeButton = document.getElementById('theme-button');
const themeStyle = document.getElementById('theme');

toggleThemeButton.addEventListener('click', function() {
  if (themeStyle.getAttribute('href') === 'portfolio1-light.css') {
    themeStyle.setAttribute('href', 'portfolio1-dark.css');
  } else {
    themeStyle.setAttribute('href', 'portfolio1-light.css');
  }
});
