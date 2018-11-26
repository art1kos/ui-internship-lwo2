/* global document, window */

(function() {
  /* Menu-Burger */

  const menu = document.querySelector('.menu-btn');
  const hiddenMenu = document.querySelector('.burger-menu');
  menu.onclick = () => {
    hiddenMenu.classList.contains('d-none')
      ? hiddenMenu.classList.remove('d-none')
        : hiddenMenu.classList.add('d-none');
  };
  window.onclick = (e) => {
    if (e.target !== menu) {
      hiddenMenu.classList.add('d-none');
    }
  };

  /* Tab Changer */

  const infoTabs = document.querySelector('.info-button');
  const contentTabFirst = document.getElementById('content-tab-1');
  const contentTabSecond = document.getElementById('content-tab-2');
  const contentTabThird = document.getElementById('content-tab-3');
  const btnArr = [...infoTabs.children];
  const contentArr = [contentTabFirst, contentTabSecond, contentTabThird];
  let indexOfLastClk = 0;

  const clickHandler = (e) => {
    const btnTab = e.target;
    if (!btnTab.classList.contains('current')) {
      contentArr[indexOfLastClk].classList.remove('show-content');
      btnArr[indexOfLastClk].classList.remove('current');
      indexOfLastClk = btnArr.indexOf(btnTab);
      btnTab.classList.add('current');
      contentArr[indexOfLastClk].classList.add('show-content');
    }
    return;
  };

  infoTabs.addEventListener('click', clickHandler);

  /* Form Validation */

  const regexMessage = /.{1, 250}$/;
  const form = Array.from(document.querySelectorAll('form'));
  const textarea = document.querySelector('textarea');

  form.forEach((el) => {
    const inputs = el.querySelectorAll('input');
    inputs.forEach(function(el) {
      const currPattern = new RegExp(el.getAttribute('pattern'));
      el.onblur = function() {
        valid(currPattern, el);
      };
    });
  });
  const valid = (reg, el) => {
    if (reg.test(el.value)) {
      el.classList.add('blur_success');
      el.classList.remove('blur_error');
    } else {
      el.classList.add('blur_error');
      el.classList.remove('blur_success');
    }
  };
  textarea.onblur = function() {
    valid(regexMessage, this);
  };
})();
