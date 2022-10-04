function scrollHeader(){
  const header = document.getElementById('header');
  if(this.scrollY >= 50) header.classList.add('scroll-header');
}
window.addEventListener('scroll', scrollHeader);