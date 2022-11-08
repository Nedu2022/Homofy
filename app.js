// function scrollHeader(){
//   const header = document.getElementById('header');
//   if(this.scrollY >= 50) header.classList.add('scroll-header');

  window.addEventListener("scroll", () => {
    let header = document.getElementById("header");
    header.classList.toggle("fixed", this.window.scrollY > 0);
  });

// window.addEventListener('scroll', scrollHeader);


let swiper = new Swiper(".popular__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

const accordionItems = document.querySelectorAll('.value__accordion-item')

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.value__accordion-header')
  

  accordionHeader.addEventListener('click', () =>{
    const openItem = document.querySelector('.accordion-open')

      toggleItem(item)
  
      if(openItem && openItem!== item) {
        toggleItem(openItem)
      }
    })

})

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.value__accordion-content')

  if(item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }

}

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id')
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);


function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY >= 350) {
    scrollUp.classList.add('show-scroll')
  } else {
    scrollUp.classList.remove('show-scroll')
  }
}

window.addEventListener('scroll', scrollUp);


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx noon' : 'bx bx-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentIcon())
  localStorage.setItem('selected-icon', getCurrentIcon())
});

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal(`.home__title, .popular__container, .subscribe__container, .footer__container`)
sr.reveal(`.home__description, footer__info`, {delay: 500})
sr.reveal(`.home__search`, {delay: 600})
sr.reveal(`.home__value`, {delay: 700})
sr.reveal(`.home__images`, {delay: 800, origin: 'bottom'})
sr.reveal(`.logos__img`, {interval: 100})
sr.reveal(`.value__images, .contact__content`, {origin: 'left'})
sr.reveal(`.value__content, .contact__images`, {origin: 'right'})
