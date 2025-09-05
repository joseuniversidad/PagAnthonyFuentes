// Vue
new Vue({
    el: '#app',
    data: {
      pregunta: '¿Te sientes de la chingada?',
      mensaje: 'Ven donde Moñin, <br> Y tómate una Michelada',
    }
  });
  
  // GSAP Animaciones
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.to(".hero", {
    scrollTrigger: {
      trigger: ".hero",
      scrub: true,
      pin: true,
      start: "center center",
      end: "bottom -100%",
      toggleClass: { targets: ".hero", className: "active" },
      ease: "power2"
    }
  });
  
  gsap.to(".hero__image", {
    scrollTrigger: {
      trigger: ".hero",
      scrub: 0.5,
      start: "top bottom",
      end: "bottom -300%",
      ease: "power2"
    },
    y: "-30%"
  });

   gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".fade-section").forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("background-carousel");
    const images = [
      'imagenes/moñin1.jpg',
      'imagenes/patojos.jpg',
      'imagenes/view.jpg',
      'imagenes/vista.jpg',
      'imagenes/sali.jpg'
    ];
    let currentIndex = 0;

    function changeBackground() {
      carousel.style.backgroundImage = `url('${images[currentIndex]}')`;
      currentIndex = (currentIndex + 1) % images.length;
    }

    changeBackground(); // Inicial
    setInterval(changeBackground, 5000); // Cada 5s
  });


