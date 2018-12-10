/* global document, window, pageYOffset */

/* Accordion */
(function() {
  const accArr = [...document.getElementsByClassName('accordion')];
  const accContent = [...document.getElementsByClassName('panel')];
  const arrayImg = [...document.querySelectorAll('.service_second_content_main_image  img')];

  accArr.forEach((e, i) => {
    e.onclick = function() {
      if (!e.nextElementSibling.classList.contains('panel_open')) {
        clearContent();
      }
      clearImages();
      e.nextElementSibling.classList.toggle('panel_open');
      e.classList.toggle('active');
      e.classList.toggle('unactive');
      arrayImg[i].classList.toggle('dsp_none');
    };
  });
  function clearContent() {
    accContent.forEach((e) => {
      e.classList.remove('panel_open');
      e.previousElementSibling.classList.add('unactive');
      e.previousElementSibling.classList.remove('active');
    });
  }
  function clearImages() {
    arrayImg.forEach((e) => {
      e.classList.add('dsp_none');
    });
  }
})();

/* Scroll */
(function() {
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.container-header');
    if (pageYOffset > 1 ) {
      navbar.classList.add('header_background');
    } else {
      navbar.classList.remove('header_background');
    }
  });
})();

/* Modal Images */
(function() {
  const popupImages = document.getElementsByClassName('popup');
  const modalImg = document.getElementById('img');
  const modal = document.querySelector('.modal');
  for (let i = 0; i < popupImages.length; i++) {
    let popupImage = popupImages[i];
    popupImage.onclick = function(e) {
      modal.classList.add('modal-show');
      modalImg.src = this.src;
      document.body.classList.add('body_popup');
    };
  }
  modal.onclick = function(e) {
    if (e.target.tagName !== 'IMG') {
      this.classList.toggle('modal-show');
      document.body.classList.remove('body_popup');
    }
  };
})();

/* Link Tabs */
(function() {
  const navLinksArr = [...document.getElementsByClassName('nav_link')];
  navLinksArr.forEach((e) => {
    e.onclick = function() {
      clearLinks();
      e.classList.add('current_link');
    };
  });
  function clearLinks() {
    let navLinksArr = [...document.getElementsByClassName('nav_link')];
    navLinksArr.forEach((e) => {
      e.classList.remove('current_link');
    });
  }
})();


/* Slider */
(function() {
  const slidersArr = [...document.querySelectorAll('.slider, .slider_second')];

  slidersArr.forEach((slider) => sliderInit(slider));

  function sliderInit(slider) {
    const allSlidesContainer = slider.querySelector('.all_slides');
    let counter = 0;

    const nextSlide = (content) => {
      if (counter === -66.66666) {
        counter = 0;
        content.style.transform = 'translateX(' + counter + '%)';
      } else {
        counter -=33.33333;
        content.style.transform = 'translateX(' + counter + '%)';
      }
    };

    const prevSlide = (content) => {
      if (counter === 0) {
        counter = -66.66666;
        content.style.transform = 'translateX(' + counter + '%)';
      } else {
        counter += 33.33333;
        content.style.transform = 'translateX(' + counter + '%)';
      }
    };

    const sliderHandler = (e) => {
      e.preventDefault();
      const arrow =
        e.target.closest('.arrow_left')
        || e.target.closest('.arrow_right');
      if (arrow && arrow.classList.contains('arrow_left')) {
        prevSlide(allSlidesContainer);
      }
      if (arrow && arrow.classList.contains('arrow_right')) {
        nextSlide(allSlidesContainer);
      }
    };

    slider.addEventListener('click', sliderHandler);
  }
})();
