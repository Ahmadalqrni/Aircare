// JS for AirCare landing page (future interactivity) 

function toggleContrast() {
  document.body.classList.toggle('high-contrast');
  showToast(document.body.classList.contains('high-contrast') ? 'تم تفعيل التباين العالي' : 'تم إيقاف التباين العالي');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function showScreen(screenId) {
  const screens = document.querySelectorAll('.app-screen');
  screens.forEach(screen => {
    screen.style.display = 'none';
  });
  document.getElementById(screenId).style.display = 'flex';
  // Show a toast for navigation (optional, can customize per screen)
  if (screenId !== 'hero-screen') {
    showToast('تم الانتقال إلى الشاشة التالية');
  }
}

// Optionally, show the hero screen on load
showScreen('hero-screen'); 