var navTrigger = document.querySelector('.navTrigger');
var menu = document.getElementById("menu");
var shadow = document.getElementById("shadow");
navTrigger.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.toggle('main-menu_active');
    this.classList.toggle('active');
    shadow.classList.toggle('shadow-block_active');
}, false);
route = document.URL;
