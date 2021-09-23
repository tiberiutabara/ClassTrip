
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener("scroll", () => {
      var y = window.scrollY;
      if (y >= 400){
          backToTop.classList.add('appear');
          return;
      }
      else{
          backToTop.classList.remove('appear');
      }
  });
