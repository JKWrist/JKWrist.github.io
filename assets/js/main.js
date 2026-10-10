(function() {
  'use strict';

  // Mobile menu toggle (for responsive)
  window.toggleMenu = function() {
    var nav = document.querySelector('.site-nav');
    if (!nav) return;
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  };

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Skills bar animation on scroll
  var skillBars = document.querySelectorAll('.skill-bar-fill');
  if (skillBars.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var bar = entry.target;
          var width = bar.style.width;
          bar.style.width = '0%';
          bar.style.transition = 'width 1s ease';
          setTimeout(function() { bar.style.width = width; }, 100);
          observer.unobserve(bar);
        }
      });
    });
    skillBars.forEach(function(bar) { observer.observe(bar); });
  }
})();
