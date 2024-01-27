const sun = document.querySelector('.sun');
      const scene = document.querySelector('.scene');
      sun.addEventListener('click', () => {
        scene.classList.toggle('night')
      })