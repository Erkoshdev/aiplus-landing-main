document.addEventListener('DOMContentLoaded', function () {
  if(window.innerWidth > 767) {
    //слайдер результаты учеников
    new Swiper('.result-slider', {
      slidesPerView: 2,
      spaceBetween: 20,
      freeMode: true,
      grabCursor: true,

      navigation: {
        nextEl: '.result-slider-next',
        prevEl: '.result-slider-prev',
      },

      breakpoints: {
        991: {
          slidesPerView: 3,
        },
        1199: {
          slidesPerView: 4,
        }
      }
    });


    //graduates slider
    new Swiper('.graduates-slider', {
      slidesPerView: 2,
      spaceBetween: 25,
      freeMode: true,
      grabCursor: true,

      navigation: {
        nextEl: '.graduate-slider-next',
        prevEl: '.graduate-slider-prev',
      },

      breakpoints: {
        991: {
          slidesPerView: 3,
        },
        1199: {
          slidesPerView: 4,
        }
      }
    });


    //ent result slider
    new Swiper('.ent-result-slider', {
      slidesPerView: 2,
      spaceBetween: 20,
      freeMode: true,
      grabCursor: true,

      navigation: {
        nextEl: '.ent-result-slider-next',
        prevEl: '.ent-result-slider-prev',
      },

      breakpoints: {
        991: {
          slidesPerView: 3,
        },
        1199: {
          slidesPerView: 4,
        }
      }
    });
  }


  // Инициализация lightGallery
  lightGallery(document.getElementById('resultGallery'), {
    // plugins: [lgThumbnail, lgFullscreen, lgZoom],
    selector: '.ent-result-card', // Указываем, чтобы lightGallery запускался по ссылкам внутри слайдов
  });


  //champion slider
  new Swiper('.champion-slider', {
    slidesPerView: 2,
    spaceBetween: 25,
    freeMode: true,
    grabCursor: true,

    navigation: {
      nextEl: '.champion-slider-next',
      prevEl: '.champion-slider-prev',
    },

    breakpoints: {
      991: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 4,
      }
    }
  });
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
    if(link.classList.contains('toggle-mobile-dropdown')) return
    closeMobileMenu()
  })
})
document.querySelectorAll('.navbar-sm-dropdown-link').forEach(link => {
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
  document.querySelectorAll('.navbar-sm-dropdown-menu').forEach(item => {
    item.classList.remove('show')
  })
}


//toggle mobile dropdown menu in navbar
document.querySelectorAll('.toggle-mobile-dropdown').forEach(item => {
  item.addEventListener('click', () => {
    const menu = item.nextElementSibling
    menu.classList.toggle('show')
  })
})


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


//dropdown link prevent default
document.querySelectorAll('.navbar-dropdown .navbar-link').forEach(link => {
  link.addEventListener('click', event => event.preventDefault());
})


//modal
function showModal() {
  document.querySelector('body').classList.add('scroll-locked')
  if(window.innerWidth > 767) {
    document.querySelector('body').style.paddingRight = '17px'
  }
}

function closeModal() {
  document.querySelectorAll('.modal').forEach(item => item.classList.remove('show'))
  document.querySelector('body').classList.remove('scroll-locked')
  document.querySelector('body').style.paddingRight = '0'
  closeVideoModal()
}

document.querySelectorAll('.btn-close').forEach(item => {
  item.onclick = closeModal
})


//feedback modal
document.querySelectorAll('.call-feedback-modal').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('feedbackModal').classList.add('show')
    showModal()
  })
})


//video modal
document.querySelectorAll('.call-video-modal').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    const videoSrc = item.getAttribute('data-src')
    showVideoModal(videoSrc)
    showModal()
  })
})

function showVideoModal(src) {
  document.getElementById('videoModal').classList.add('show')
  const youtubeContainer = document.getElementById('resultVideo');
  youtubeContainer.querySelector('iframe').setAttribute('src', src)
}
function closeVideoModal() {
  const youtubeContainer = document.getElementById('resultVideo');
  youtubeContainer.querySelector('iframe').setAttribute('src', '')
}


