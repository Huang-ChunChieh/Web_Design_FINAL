// 分頁切換功能
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
// 假送出表單
document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('感謝您的來信，我們會盡快回覆您！');
  this.reset();
});
