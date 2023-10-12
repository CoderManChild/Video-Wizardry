   particlesJS("particles-js", {
      particles: {
         number: {
            value: 165, // Adjust the number of particles as needed
            density: {
               enable: true,
               value_area: 800
            }
         },
         color: {
            value: "#ffffff" // Customize the color of the particles
         },
         shape: {
            type: "edge", // You can use "circle", "edge", "triangle", "polygon", etc.
            stroke: {
               width: 0,
               color: "#000000"
            },
            polygon: {
               nb_sides: 5
            }
         },
         opacity: {
            value: 0.23, // Adjust the opacity of the particles
            random: true,
            anim: {
               enable: true,
               speed: 1,
               opacity_min: 0,
               sync: false
            }
         },
         size: {
            value: 3, // Adjust the size of the particles
            random: true,
            anim: {
               enable: false,
               speed: 4,
               size_min: 0.3,
               sync: false
            }
         },
         line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff", // Customize the color of the particle connections
            opacity: 0.4,
            width: 1
         },
         move: {
            enable: true,
            speed: 0.83, // Adjust the speed of particle movement
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
               enable: false,
               rotateX: 600,
               rotateY: 600
            }
         }
      },
      interactivity: {
         detect_on: "canvas",
         events: {
            onhover: {
               enable: true,
               mode: "repulse"
            },
            onclick: {
               enable: true,
               mode: "push"
            },
            resize: true
         },
         modes: {
            grab: {
               distance: 400,
               line_linked: {
                  opacity: 1
               }
            },
            bubble: {
               distance: 400,
               size: 40,
               duration: 2,
               opacity: 8,
               speed: 3
            },
            repulse: {
               distance: 100
            },
            push: {
               particles_nb: 4
            },
            remove: {
               particles_nb: 2
            }
         }
      },
      retina_detect: true
   });
