function setLanguage(lang) {
  document.querySelectorAll('.lang-text').forEach(el => {
    if (el.dataset[lang]) {
      el.textContent = el.dataset[lang];
    }
  });
  document.querySelectorAll('.lang-placeholder').forEach(el => {
    if (el.dataset[lang]) {
      el.placeholder = el.dataset[lang];
    }
  });
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.classList.toggle('active', btn.id.startsWith(lang));
  });
}

document.getElementById('uzb-btn').addEventListener('click', () => setLanguage('uz'));
document.getElementById('ru-btn').addEventListener('click', () => setLanguage('ru'));
document.getElementById('en-btn').addEventListener('click', () => setLanguage('en'));
window.addEventListener('DOMContentLoaded', () => setLanguage('uz'));