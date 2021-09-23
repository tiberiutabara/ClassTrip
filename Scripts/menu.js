// Hamburger menu toggle

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Hamburger menu arrow toggle animation

document.querySelector('.hamburger').addEventListener('click', function() {
    const icon = this.querySelector('i');
  
    if (icon.classList.contains('fa-bars')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-arrow-right');
    } else {
      icon.classList.remove('fa-arrow-right');
      icon.classList.add('fa-bars');
    }
  });

// Make menu dissaper on homepage after meeting image (homepage only)

  const nav = document.querySelector('.navbar');

  var bigScreen = window.matchMedia( "(min-width: 950px)" );

  if (bigScreen.matches) { 

    window.addEventListener("scroll", () => {
        var y = window.scrollY;
        if (y >= 240){
            nav.classList.add('disappear');
            return;
        }
        else{
            nav.classList.remove('disappear');
        }
    });

}