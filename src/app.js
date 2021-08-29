import 'particles.js/particles';
import SmoothScroll from 'smooth-scroll';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import '@styles/style.scss';

import Typed from 'typed.js';


const particlesJS = window.particlesJS;
particlesJS.load('particles-js', 'assets/particles.json', null);

var options = {
	strings: ['Mobile developer', 'Web developer', 'Frontend Developer'],
	typeSpeed: 50,
	backSpeed: 50,
	loop: true,
	fadeOut: false,
	fadeOutClass: 'typed-fade-in',
}



var typed = new Typed('#typed', options);
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000
});

function on() {
	console.log('Holaaa');
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

window.on = on;
window.off = off;


const toggleButton = document.getElementById('button-menu')
const navWrapper = document.getElementById('nav')

toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close')
  navWrapper.classList.toggle('show')
})

navWrapper.addEventListener('click',e => {
  if(e.target.id === 'nav'){
    navWrapper.classList.remove('show')
    toggleButton.classList.remove('close')
  }
})