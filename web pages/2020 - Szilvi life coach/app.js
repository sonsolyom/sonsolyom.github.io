const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');
const about = document.querySelector('.nav-link about');
const toLarge = document.querySelector('.toLarge');
//const help = document.querySelector('.help');


hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  
})

about.addEventListener('click', () => {
  toLarge.classList.toggle('larger');
  
})

/*help.addEventListener('click', () => {
  help.classList.toggle('open');
  
})


*/