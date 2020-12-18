AOS.init();

const bars = document.querySelector('.hamburgerBars');
const dropdown = document.querySelector('.hamburgerLinks');
const dropdownLink = document.querySelector('.hamburgerLinks a');
const topBar = document.querySelector('.top');
const bottomBar = document.querySelector('.bottom');
const hide = document.querySelector('.middle');


bars.onclick = function () {
  dropdown.classList.toggle('open');
  topBar.classList.toggle('topAngle');
  bottomBar.classList.toggle('bottomAngle');
  hide.classList.toggle('middleHide');
}

dropdownLink.onclick = function () {
  dropdown.classList.remove('open');
}

