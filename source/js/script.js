var pageHeader = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header--nojs');
pageHeader.classList.remove('page-header--opened-menu');
pageHeader.classList.add('page-header--closed-menu');

navToggle.addEventListener('click', function() {
  if (pageHeader.classList.contains('page-header--closed-menu')) {
    pageHeader.classList.remove('page-header--closed-menu');
    pageHeader.classList.add('page-header--opened-menu');
    navToggle.classList.add('hamburger-button--close-menu');
    navToggle.classList.remove('hamburger-button--open-menu');
  } else {
    pageHeader.classList.add('page-header--closed-menu');
    pageHeader.classList.remove('page-header--opened-menu');
    navToggle.classList.remove('hamburger-button--close-menu');
    navToggle.classList.add('hamburger-button--open-menu');
  }
});
