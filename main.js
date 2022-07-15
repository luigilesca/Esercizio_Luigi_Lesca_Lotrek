let hamburger = document.querySelector('.header__hamburger');

hamburger.addEventListener('click', function () {
  console.log('click');
  document.body.classList.toggle('menu-open');
});
