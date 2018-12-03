/* global document, window, pageYOffset */

/* Accordion */
const accArr = [...document.getElementsByClassName('accordion')];
const accContent = [...document.getElementsByClassName('panel')];

accArr.forEach((e) => {
  e.onclick = function() {
    if (!e.nextElementSibling.classList.contains('panel_open')) {
      clearContent();
    }
    e.nextElementSibling.classList.toggle('panel_open');
  };
});
function clearContent() {
  accContent.forEach((e) => {
    e.classList.remove('panel_open');
  });
}


/* Scroll */
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.container-header');
  if (pageYOffset > 1 ) {
    navbar.classList.add('header_background');
  } else {
    navbar.classList.remove('header_background');
  }
});

/* Modal Images */
const popupImages = document.getElementsByClassName('popup');
const modalImg = document.getElementById('img');
const modal = document.querySelector('.modal');
for (let i = 0; i < popupImages.length; i++) {
  let popupImage = popupImages[i];
  popupImage.onclick = function(e) {
    modal.classList.add('modal-show');
    modalImg.src = this.src;
  };
}
modal.onclick = function(e) {
  if (e.target.tagName !== 'IMG') {
    this.classList.toggle('modal-show');
  }
};


/* Link Tabs */
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


/* Slider */
const arrowLeft = document.getElementById('slider_container_arrow_left');
const arrowRight = document.getElementById('slider_container_arrow_right');
const arrowLeftBottom = document.getElementById('slider_container_arrow_left_bottom');
const arrowRightBottom = document.getElementById('slider_container_arrow_right_bottom');
const contentSliderTop = document.getElementById('content');
const contentSliderBottom = document.getElementById('content_bottom');
let counter = 0;
const nextSlide = (content) => {
  if (counter === -66.66666) {
    counter = 0;
    content.style.transform = 'translateX(' + counter + '%)';
  } else {
    counter-=33.33333;
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

arrowRight.onclick = nextSlide.bind(null, contentSliderTop);
arrowLeft.onclick = prevSlide.bind(null, contentSliderTop);
arrowLeftBottom.onclick = prevSlide.bind(null, contentSliderBottom);
arrowRightBottom.onclick = nextSlide.bind(null, contentSliderBottom);
