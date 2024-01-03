const links = document.querySelectorAll('.nav-list li a');

for(link of links) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();

  const href = this.getAttribute('href');
  document.querySelector(href).scrollIntoView({
    behavior: 'smooth'
  })
}

// Sticky Header

window.addEventListener('scroll', ()=> {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
})

// SCROLL TO TOP

const scrollBtn = document.querySelector('.top');
const rootEl = document.documentElement;

document.addEventListener('scroll', showBtn);
scrollBtn.addEventListener('click', scrollToTop);

function showBtn(){
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
  if(rootEl.scrollTop / scrollTotal > 0.3) {
    scrollBtn.classList.add('show-btn');
  } else {
    scrollBtn.classList.remove('show-btn');
  }
}

function scrollToTop(){
  rootEl.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Scroll Indicator JS

window.onscroll = () => scrollProgress();

function scrollProgress() {
  const currentState = document.body.scrollTop || document.documentElement.scrollTop;

  const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;


  const scrollPercentage = (currentState / pageHeight) * 100;
 console.log(currentState);

  const progressBar = document.querySelector('.progress');

  progressBar.style.visibility = 'visible';
  progressBar.style.width = scrollPercentage + '%';
}