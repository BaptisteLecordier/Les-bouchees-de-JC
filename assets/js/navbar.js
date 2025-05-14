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



