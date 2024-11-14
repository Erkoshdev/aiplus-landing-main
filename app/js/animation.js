document.addEventListener('DOMContentLoaded', () => {
  const doAnimations = function() {
    const offset = window.scrollY + window.innerHeight; // Нижняя граница видимой области

    const animatables = document.querySelectorAll('.animatable');

    if (animatables.length === 0) {
      window.removeEventListener('scroll', doAnimations);
    }

    animatables.forEach(function(animatable) {
      if ((animatable.getBoundingClientRect().top + window.scrollY + 100) < offset) {
        animatable.classList.remove('animatable');
        animatable.classList.add('animated');
      }
    });
  };

  window.addEventListener('scroll', doAnimations);
  doAnimations(); // Запускаем анимации при загрузке
})