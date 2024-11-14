document.addEventListener('DOMContentLoaded', () => {
  //header fixed
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
})