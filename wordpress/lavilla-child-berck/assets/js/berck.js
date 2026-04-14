(function () {
  var slider = document.querySelector('[data-berck-slider]');

  if (!slider) {
    return;
  }

  var slides = slider.querySelectorAll('.berck-slide');
  var prev = slider.querySelector('[data-berck-prev]');
  var next = slider.querySelector('[data-berck-next]');
  var index = 0;

  function setActive(newIndex) {
    slides[index].classList.remove('is-active');
    index = (newIndex + slides.length) % slides.length;
    slides[index].classList.add('is-active');
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
})();