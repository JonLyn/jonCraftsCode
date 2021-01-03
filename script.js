AOS.init();

const bars = document.querySelector('.hamburgerBars');
const dropdown = document.querySelector('.hamburgerLinks');
const dropdownLinks = document.querySelectorAll('.hamburgerLinks li');
const topBar = document.querySelector('.top');
const bottomBar = document.querySelector('.bottom');
const hide = document.querySelector('.middle');

// const navLink = document.querySelector('.navLinks');


bars.onclick = function () {
  dropdown.classList.toggle('open');
  dropdown.classList.toggle('close');
  dropdown.classList.add('show');


  topBar.classList.toggle('topAngle');
  bottomBar.classList.toggle('bottomAngle');
  hide.classList.toggle('middleHide');
}

dropdownLinks.forEach(function (link) {
  link.onclick = function () {
    dropdown.classList.toggle('open');
    dropdown.classList.toggle('close');

    topBar.classList.remove('topAngle');
    bottomBar.classList.remove('bottomAngle');
    hide.classList.remove('middleHide');
  }
})

console.log(dropdownLinks);

// dropdownLinks.forEach(function (link) {

// })







