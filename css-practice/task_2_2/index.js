/* global document, window, innerWidth */

/* Code By Taras */
const support = document.querySelector('.support h3');
const about = document.querySelector('.about_us h3');
const dropdownSupp = document.querySelector('.support ul');
const dropdownAbout = document.querySelector('.about_us ul');
const dNone = 'disp-none';
const width768 = 768;
const hideEl = (el) => {
  el.classList.add(dNone);
};
const showEl = (el) => {
  el.classList.remove(dNone);
};
if (innerWidth <= width768) {
  hideEl(dropdownAbout);
  hideEl(dropdownSupp);
}

window.onresize = () => {
  if (innerWidth <= width768) {
    hideEl(dropdownAbout);
    hideEl(dropdownSupp);
  } else {
    showEl(dropdownAbout);
    showEl(dropdownSupp);
  }
};

support.onclick = () => {
  dropdownSupp.classList.contains(dNone)
    ? showEl(dropdownSupp)
    : hideEl(dropdownSupp);
};

support.onmouseleave = () => {
  if (innerWidth <= width768) {
    hideEl(dropdownSupp);
  }
};
about.onclick = () => {
  dropdownAbout.classList.contains(dNone)
  ? showEl(dropdownAbout)
  : hideEl(dropdownAbout);
};

about.onmouseleave = (e) => {
  if (innerWidth <= width768) {
    hideEl(dropdownAbout);
  }
};


/* Video */
const video = document.querySelector('video');
const playVideo = document.querySelector('.video-player');
const continueVideo = document.querySelector('.fa-play-circle');
const pauseVideo = document.querySelector('.fa-pause-circle');
// playVideo.onclick = () => {
//   if (video.paused) {
//     hideEl(continueVideo);
//     showEl(pauseVideo);
//     video.play();
//   } else {
//     showEl(continueVideo);
//     hideEl(pauseVideo);
//     video.pause();
//   }
// };
// .disp-none {
//   display: none;
// }
// .disp-block {
//   display: block;
// }

playVideo.onclick = () => {
  if (video.paused) {
    hideEl(continueVideo);
    showEl(pauseVideo);
    video.play();
  } else {
    showEl(continueVideo);
    hideEl(pauseVideo);
    video.pause();
  }
};


/* Form Validation */
(function() {
  const form = Array.from(document.querySelectorAll('form'));
  const button = document.querySelector('button');
  const hint = document.getElementById('hint');
  form.forEach((el) => {
    const inputs = Array.from(el.querySelectorAll('input'));
    inputs.forEach(function(el) {
      const currPattern = new RegExp(el.getAttribute('pattern'));
      el.onkeyup = function() {
        const elHint = this.getAttribute('data-text');
        if (el.classList.contains('blur_error')) {
          hint.innerHTML = elHint;
        } else {
          hint.innerHTML = '';
        }
        valid(currPattern, el);
        if (inputs.every((el) => el.classList.contains('blur_success'))) {
          button.classList.remove('btn_disable');
        } else {
          button.classList.add('btn_disable');
        }
      };
    });
  });
  const valid = (reg, el) => {
    if (reg.test(el.value)) {
      el.classList.add('blur_success');
      el.classList.remove('blur_error');
      el.classList.add('valid');
      el.classList.remove('invalid');
    } else {
      el.classList.add('blur_error');
      el.classList.remove('blur_success');
      el.classList.add('invalid');
      el.classList.remove('valid');
    }
  };
})();
