// TAJ HR Services — shared site script
// 1) Mobile nav toggle
// 2) Basic contact form validation (front-end only — no backend yet)

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var isOpen = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.querySelector('#name').value.trim();
      var email = form.querySelector('#email').value.trim();
      var message = form.querySelector('#message').value.trim();

      if (!name || !email || !message) {
        status.textContent = 'Please fill in all required fields.';
        status.className = 'form-status';
        return;
      }

      // NOTE: This form does not send data anywhere yet because this is a
      // static HTML site (GitHub Pages cannot run server-side code).
      // To actually receive submissions, connect this form to a service
      // like Formspree, Getform, or your own backend later.
      status.textContent = 'Thanks, ' + name + '! Your message has been captured (demo only — connect a form service to receive real submissions).';
      status.className = 'form-status success';
      form.reset();
    });
  }
});
