
function darkMode() {
  const root = document.querySelector('html');
  if (root.className === 'dark') {
    root.className = 'light';
  } else {
    root.className = 'dark';
  }
}


document.querySelector('.theme-toggle').addEventListener('click', darkMode);