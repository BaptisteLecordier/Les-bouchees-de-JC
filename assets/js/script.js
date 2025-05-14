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


     const elements = [];

    document.querySelectorAll('.follow-me').forEach(el => {
      const rect = el.getBoundingClientRect();
      elements.push({
        el,
        baseX: rect.left + window.scrollX,
        baseY: rect.top + window.scrollY,
        offsetX: 0,
        offsetY: 0,
        targetX: 0,
        targetY: 0,
      });
    });

    let mouseX = 0;
    let mouseY = 0;

    const maxDistance = 150;   // distance d'influence du curseur
    const maxOffset = 30;      // déplacement maximal
    const lerp = 0.1;          // inertie (0 = lent, 1 = instantané)

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animate() {
      elements.forEach(obj => {
        const centerX = obj.baseX + 40;
        const centerY = obj.baseY + 40;

        const dx = mouseX - centerX;
        const dy = mouseY - centerY;
        const distance = Math.hypot(dx, dy);

        if (distance < maxDistance) {
          const strength = (maxDistance - distance) / maxDistance;
          obj.targetX = dx * strength * (maxOffset / maxDistance);
          obj.targetY = dy * strength * (maxOffset / maxDistance);
        } else {
          obj.targetX = 0;
          obj.targetY = 0;
        }

        obj.offsetX += (obj.targetX - obj.offsetX) * lerp;
        obj.offsetY += (obj.targetY - obj.offsetY) * lerp;

        obj.el.style.transform = `translate(${obj.offsetX}px, ${obj.offsetY}px)`;
      });

      requestAnimationFrame(animate);
    }

    animate();





const toggle = document.getElementById('menuToggle');
    toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
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








function cascadeAppear(containerSelector, delay = 200) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    
    const children = container.children;
    console.log(children.length); 
    Array.from(children).forEach((child, index) => {
        

        if (document.getElementById('menu-overlay').classList.contains('isOpen')) {
          setTimeout(() => {
            child.classList.toggle('is-visible');
          }, index * (delay - (children.length*10)));
        } else {
          child.classList.toggle('is-visible');
        }

        
        
      
      


      
    });
  }



document.querySelectorAll('.trigger-opening-nav').forEach(menuBtn => {
  menuBtn.addEventListener("click", function() {
    
    const menuOverlay = document.getElementById('menu-overlay');
    menuOverlay.classList.toggle('isOpen');

    cascadeAppear('.menu-overlay > ul');
    
    
  })
});



