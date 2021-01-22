// JavaScript Document



var buttonElement = document.querySelector('hamburger');
buttonElement.addEventListener('click', togglemenu);

function togglemenu() {
    var navElement = document.querySelector('menu');
    navElement.classList.toggle('toonMenu');
}

