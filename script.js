AOS.init();

const bars = document.querySelector('.hamburgerBars');
const dropdown = document.querySelector('.hamburgerLinks');
const dropdownLink = document.querySelector('.hamburgerLinks a');

bars.onclick = function () {
  dropdown.classList.toggle('open');
}

dropdownLink.onclick = function () {
  dropdown.classList.remove('open');
}

// $('.checkbox').on('click', function () {
//   console.log('yes');
//   $('.hamburgerLinks').addClass('open');
// });

// $('.checkbox').on('click', function () {
//   $('.hamburgerLinks').removeClass('open');
// });

// var logos = document.querySelectorAll('path[0]');
// var length = logos.getTotalLength();

// var path2 = document.querySelector('.path2');
// var length2 = path2.getTotalLength();

// console.log(length);
// console.log(length2);

const logo = document.querySelectorAll('path');
for (let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
// console.log(logo);