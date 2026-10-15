document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const button = form.querySelector('button[type="submit"]');
      if (button) {
        button.disabled = true;
        button.textContent = 'Sending…';
      }

      if (status) {
        status.style.display = 'block';
        status.textContent = 'Sending your message…';
      }

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (!response.ok) throw new Error('Form submission failed');

        form.reset();
        if (status) {
          status.textContent = 'Your message has been sent. Thank you for writing to me.';
        }
      } catch (error) {
        if (status) {
          status.textContent = 'I’m sorry, your message could not be sent just now. Please try again in a little while.';
        }
      } finally {
        if (button) {
          button.disabled = false;
          button.textContent = 'Send message';
        }
      }
    });
  }
});
