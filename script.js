// var logo = document.querySelectorAll('.logo');
// var length = path.getTotalLength();

// var path2 = document.querySelector('.path2');
// var length2 = path2.getTotalLength();

console.log(length);
// console.log(length2);

const logo = document.querySelectorAll(".logo");
for (let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
// console.log(logo);