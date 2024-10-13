//слайдер результаты учеников
const swiper = new Swiper('.result-slider', {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  grabCursor: true,

  navigation: {
    nextEl: '.result-slider-next',
    prevEl: '.result-slider-prev',
  },
});

//collapse
document.querySelectorAll('.collapse-header').forEach(button => {
  button.addEventListener('click', function () {
    const content = this.nextElementSibling; // Находим следующий элемент после кнопки (collapse-content)

    if (content.classList.contains('show')) {
      this.classList.remove('active');
      content.style.maxHeight = null;
      content.classList.remove('show');
    } else {
      this.classList.add('active');
      content.classList.add('show');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});