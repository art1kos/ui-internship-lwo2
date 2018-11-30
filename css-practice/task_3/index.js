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
let navLinksArr = [...document.getElementsByClassName('nav_link')];
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
