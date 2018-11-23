/* eslint-disable */

const menu = document.querySelector('.menu-btn');
const hiddenMenu = document.querySelector('.burger-menu');
const regexMessage = /.{1, 250}$/;
const buttonFirst = document.getElementById('tab1');
const buttonSecond = document.getElementById('tab2');
const buttonThird = document.getElementById('tab3');
const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
const form = Array.from(document.querySelectorAll('form'));
const testTop = form[0].querySelectorAll('input');
const testBottom = form[1].querySelectorAll('input');
const textarea = document.querySelector('textarea');
const valid = (reg, el) => {
  if (reg.test(el.value)) {
    el.classList.add('blur_success');
    el.classList.remove('blur_error');
  } else {
    el.classList.add('blur_error');
    el.classList.remove('blur_success');
  }
};

/* Menu-Burger */

menu.onclick = () => {
  hiddenMenu.classList.contains('d-none') ? hiddenMenu.classList.remove('d-none') : hiddenMenu.classList.add('d-none');
};
window.onclick = (e) => {
  if (e.target !== menu) {
    hiddenMenu.classList.add('d-none');
  }
};

/* Form Validation */

testTop.forEach(function(el) {
  const currPattern = new RegExp(el.getAttribute('pattern'));
  el.onblur = function() {
    valid(currPattern, el);
  };
});

testBottom.forEach(function(el) {
  const currPattern = new RegExp(el.getAttribute('pattern'));
  el.onblur = function() {
    valid(currPattern, el);
  };
});

textarea.onblur = function() {
  valid(regexMessage, this);
};

/* Tab Changer */

const change = () => {
  const arrContent = [buttonFirst, buttonSecond, buttonThird];
  const arrBtn = [btn1, btn2, btn3];
  const hiddenContent = () => {
    for (let i = 0; i < arrContent.length; i++) {
      arrContent[i].style.display = 'none';
    }
  };
  const currBtn = () => {
    for (let i = 0; i < arrBtn.length; i++) {
      arrBtn[i].classList.remove('current');
    }
  };
  btn1.onclick = () => {
    hiddenContent();
    currBtn();
    buttonFirst.style.display = 'block';
    btn1.classList.add('current');
    buttonFirst.style.animation = 'hidden_visible 2s';
  };
  btn2.onclick = () => {
    hiddenContent();
    currBtn();
    buttonSecond.style.display = 'block';
    btn2.classList.add('current');
    buttonSecond.style.animation = 'hidden_visible 2s';
  };
  btn3.onclick = () => {
    hiddenContent();
    currBtn();
    buttonThird.style.display = 'block';
    btn3.classList.add('current');
    buttonThird.style.animation = 'hidden_visible 2s';
  };
};
change();
