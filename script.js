// Tabs switching
const plansTab = document.getElementById('plans-tab');
const listTab = document.getElementById('list-tab');
const plansSection = document.getElementById('plans-section');
const listSection = document.getElementById('list-section');

plansTab.onclick = () => {
  plansTab.classList.add('active');
  listTab.classList.remove('active');
  plansSection.classList.add('active');
  listSection.classList.remove('active');
};

listTab.onclick = () => {
  listTab.classList.add('active');
  plansTab.classList.remove('active');
  listSection.classList.add('active');
  plansSection.classList.remove('active');
};

// Auto-save & load from localStorage
const plansText = document.getElementById('plans-text');
const listText = document.getElementById('list-text');

// Load saved content
plansText.value = localStorage.getItem('plans') || '';
listText.value = localStorage.getItem('list') || '';

// Save on input
plansText.oninput = () => localStorage.setItem('plans', plansText.value);
listText.oninput = () => localStorage.setItem('list', listText.value);