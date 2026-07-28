// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-header nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Sticky bottom CTA appears after 30% scroll
  var cta = document.querySelector('.sticky-cta');
  if (cta) {
    window.addEventListener('scroll', function () {
      var scrolled = (window.scrollY) / (document.body.scrollHeight - window.innerHeight);
      if (scrolled > 0.3) {
        cta.classList.add('show');
      } else {
        cta.classList.remove('show');
      }
    });
  }
});
