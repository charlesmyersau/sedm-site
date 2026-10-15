document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (status) {
        status.style.display = 'block';
        status.textContent = 'This local preview does not send messages yet. We will connect this form securely when the site is ready to go live.';
      }
    });
  }
});
