import { animate, scroll } from "https://cdn.jsdelivr.net/npm/motion@12.23.12/+esm"

// Barra de progreso
scroll(animate(".progress", { scaleX: [0, 1] }, { ease: "linear" }))

document.querySelectorAll(".scroll-anim").forEach((header) => {
    scroll(animate(header, { y: [-200, 200] }, { ease: "linear" }), {
        target: header,
      })
})



tsParticles.load("tsparticles", {
  background: {
    color: {
      value: "transparent" // Mantiene tu gradiente visible
     }
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 60,
       density: {
        enable: true,
         area: 800
       }
    },
     color: {
      value: ["#a855f7", "#f472b6", "#facc15", "#38bdf8"]
    },
    links: {
       enable: true,
       color: "#ffffff",
      distance: 150,
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        default: "out"
      }
    },
    opacity: {
      value: 0.6
    },
    size: {
      value: { min: 2, max: 4 }
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      },
      onClick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 0.6
        }
      },
      push: {
        quantity: 4
      }
    }
  },
  detectRetina: true
});

AOS.init({
    duration: 1000, // duración de la animacion
    once: true 
});


