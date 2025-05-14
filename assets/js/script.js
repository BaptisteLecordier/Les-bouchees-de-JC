(function () {
    const parallax = document.querySelector(".parallax-background");
  
    function updateParallax() {
      const scrolled = window.pageYOffset;
      parallax.style.transform = `translateY(${scrolled * 0.4}px)`;
      requestAnimationFrame(updateParallax);
    }
  
    requestAnimationFrame(updateParallax);
  })();



const scrolled = window.scrollY;
        const parallax = document.querySelector('.parallax');
        parallax.style.backgroundPositionY = (scrolled * 0.5) - 100 + 'px';
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        const parallax = document.querySelector('.parallax');
        parallax.style.backgroundPositionY = (scrolled * 0.5) - 100 + 'px';
    });






const baseDelay = 150;
    const duration = 1000;

    document.querySelectorAll('.anim').forEach(animEl => {
      const children = Array.from(animEl.children);
      const total = children.length;

      children.forEach((child, i) => {
        const reverseIndex = total - 1 - i;
        child.style.transitionDelay = `${reverseIndex * baseDelay}ms`;
        child.style.transitionDuration = `${duration}ms`;
      });
    });

    function checkVisibility() {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      document.querySelectorAll('.anim').forEach(el => {
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;

        const isCenterNearViewportCenter = Math.abs(elCenter - viewportCenter) <= 600;
        const isElementVisible = rect.bottom > 0 && rect.top < viewportHeight;

        if (isCenterNearViewportCenter && isElementVisible) {
          el.classList.add('visible');
        } else if (!isElementVisible) {
          el.classList.remove('visible');
        }
        // Sinon, on ne change rien (l'élément reste visible si déjà déclenché)
      });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    window.addEventListener('load', checkVisibility);






