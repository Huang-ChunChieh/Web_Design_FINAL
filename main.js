const navButtons = document.querySelectorAll('nav button');
const tabContents = document.querySelectorAll('.tab-content');
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    navButtons.forEach(b => b.classList.remove('active'));
    tabContents.forEach(tab => tab.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('感謝您的來信，我們會盡快回覆您！');
  this.reset();
});

function switchTab(tab) {
  const navButtons = document.querySelectorAll('.nav-links button');
  const tabContents = document.querySelectorAll('.tab-content');
  navButtons.forEach(b => b.classList.remove('active'));
  tabContents.forEach(tabx => tabx.classList.remove('active'));
  document.querySelector(`.nav-links button[data-tab="${tab}"]`).classList.add('active');
  document.getElementById(tab).classList.add('active');
  window.scrollTo({top: 0, behavior: 'smooth'});
}

const images = document.querySelectorAll('.carousel-image');
const leftArrow = document.querySelector('.carousel-arrow.left');
const rightArrow = document.querySelector('.carousel-arrow.right');
let current = 0;

function showImage(idx) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === idx);
  });
}
function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}
function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}
if (leftArrow && rightArrow) {
  leftArrow.addEventListener('click', prevImage);
  rightArrow.addEventListener('click', nextImage);
}

let carouselTimer = setInterval(nextImage, 6000);
if (leftArrow && rightArrow) {
  [leftArrow, rightArrow].forEach(btn => btn.addEventListener('click', function(){
    clearInterval(carouselTimer);
    carouselTimer = setInterval(nextImage, 6000);
  }));
}
