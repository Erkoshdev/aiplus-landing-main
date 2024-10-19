//слайдер результаты учеников
document.addEventListener('DOMContentLoaded', function () {
  if(window.innerWidth > 767) {
    const swiper = new Swiper('.result-slider', {
      slidesPerView: 2,
      spaceBetween: 20,
      freeMode: true,
      grabCursor: true,

      navigation: {
        nextEl: '.result-slider-next',
        prevEl: '.result-slider-prev',
      },

      breakpoints: {
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });
  }
})


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


//header navlink dropdown
document.querySelectorAll('.navbar-dropdown').forEach(item => {
  item.addEventListener('mouseenter', function () {
    const menu = this.querySelector('.navbar-dropdown-menu');
    menu.classList.add('show')
  });
  item.addEventListener('mouseleave', function () {
    const menu = this.querySelector('.navbar-dropdown-menu');
    menu.classList.remove('show')
  })
});


//scroll top
window.onscroll = function() {
  showScrollButton();
};

function showScrollButton() {
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollBtn.style.display = 'block'; // Показываем кнопку
  } else {
    scrollBtn.style.display = 'none'; // Скрываем кнопку
  }
}

document.getElementById('scrollTopBtn').onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Плавная прокрутка
  });
}


//video modal
const videoModal = document.getElementById('videoModal');
videoModal.addEventListener('hidden.bs.modal', function () {
  const youtubeContainer = document.getElementById('resultVideo');
  youtubeContainer.innerHTML = ''; // Удаляем содержимое
});

videoModal.addEventListener('shown.bs.modal', function () {
  const youtubeContainer = document.getElementById('resultVideo');
  youtubeContainer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/zkrV_Vl3vng?si=GL520RjDYUmiSlkP" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
});


//header fixed
document.addEventListener('DOMContentLoaded', function() {
  const primaryHeader = document.querySelector('.primary-header');
  const secondaryHeader = document.querySelector('.secondary-header');

  function updateSecondaryHeader() {
    secondaryHeader.style.width = primaryHeader.offsetWidth + 'px';
    secondaryHeader.style.left = primaryHeader.getBoundingClientRect().left + window.pageXOffset + 'px';
    return primaryHeader.getBoundingClientRect().bottom + window.scrollY;
  }

  let headerBottomDistanceFromDocumentTop = updateSecondaryHeader();

  function toggleFixedClass() {
    const scrollY = window.scrollY;
    if (scrollY > headerBottomDistanceFromDocumentTop) {
      secondaryHeader.classList.add('fixed');
    } else {
      secondaryHeader.classList.remove('fixed');
    }
  }

  toggleFixedClass();

  window.addEventListener('scroll', toggleFixedClass);

  window.addEventListener('resize', function() {
    headerBottomDistanceFromDocumentTop = updateSecondaryHeader();
    toggleFixedClass();
  });
});


//анимация
document.addEventListener('DOMContentLoaded', function() {
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
});


//toggle mobile menu
const openMenuBtn = document.querySelectorAll('.open-mobile-menu');
const closeMenuBtn = document.querySelector('.close-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.createElement('div')
overlay.className = 'overlay'
openMenuBtn.forEach(btn => {
  btn.addEventListener('click', function () {
    openMobileMenu()
  })
})
closeMenuBtn.addEventListener('click', function () {
  closeMobileMenu()
})
overlay.addEventListener('click', function () {
  closeMobileMenu()
})
document.querySelectorAll('.navbar-sm-link').forEach(link => {
  link.addEventListener('click', function () {
    closeMobileMenu()
  })
})

function openMobileMenu() {
  mobileMenu.classList.add('show');
  document.querySelector('body').classList.add('scroll-locked');
  document.querySelector('.header').appendChild(overlay);
}
function closeMobileMenu() {
  mobileMenu.classList.remove('show');
  document.querySelector('body').classList.remove('scroll-locked');
  document.querySelector('.header').removeChild(overlay);
}


//iframe video
document.querySelectorAll('.video-poster').forEach(poster => {
  poster.addEventListener('click', function (e) {
    e.preventDefault();
    let videoId = poster.getAttribute('data-video-id');
    let iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay; encrypted-media, picture-in-picture');
    iframe.setAttribute('allowfullscreen', 'true');

    // Заменяем постер на iframe
    poster.parentNode.replaceChild(iframe, poster);
  });
});