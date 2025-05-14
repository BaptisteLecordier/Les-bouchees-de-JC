
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








