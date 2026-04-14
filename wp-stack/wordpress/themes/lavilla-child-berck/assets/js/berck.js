(function () {
  var slider = document.querySelector('[data-berck-slider]');

  if (slider) {
    var slides = slider.querySelectorAll('.berck-slide');
    var prev = slider.querySelector('[data-berck-prev]');
    var next = slider.querySelector('[data-berck-next]');
    var current = slider.querySelector('[data-berck-current]');
    var index = 0;

    function setActive(newIndex) {
      slides[index].classList.remove('is-active');
      index = (newIndex + slides.length) % slides.length;
      slides[index].classList.add('is-active');
      if (current) {
        current.textContent = String(index + 1);
      }
    }

    if (prev) {
      prev.addEventListener('click', function () {
        setActive(index - 1);
      });
    }

    if (next) {
      next.addEventListener('click', function () {
        setActive(index + 1);
      });
    }

    setInterval(function () {
      setActive(index + 1);
    }, 5200);
  }

  var revealItems = document.querySelectorAll('.berck-reveal');
  if ('IntersectionObserver' in window && revealItems.length > 0) {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add('is-visible');
    });
  }
})();