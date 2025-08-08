import { animate, scroll } from "https://cdn.jsdelivr.net/npm/motion@12.23.12/+esm"

// Barra de progreso
scroll(animate(".progress", { scaleX: [0, 1] }, { ease: "linear" }))

document.querySelectorAll(".scroll-anim").forEach((header) => {
    scroll(animate(header, { y: [-200, 200] }, { ease: "linear" }), {
        target: header,
      })
})