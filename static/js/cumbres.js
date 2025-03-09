/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('cumbres-nav-menu'),
      navToggle = document.getElementById('cumbres-nav-toggle'),
      navClose = document.getElementById('cumbres-nav-close');

if (navToggle && navClose) {
    navToggle.addEventListener('click', () => navMenu.classList.add('cumbres-show-menu'));
    navClose.addEventListener('click', () => navMenu.classList.remove('cumbres-show-menu'));
}

/*=============== SCROLL SUAVE ===============*/
document.querySelectorAll(".cumbres-nav__link").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - document.getElementById("cumbres-header").offsetHeight,
                behavior: "smooth"
            });
        }
        navMenu.classList.remove('cumbres-show-menu'); // Cierra el menú en móviles
    });
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
window.addEventListener('scroll', () => {
    const header = document.getElementById('cumbres-header');
    header.classList.toggle('cumbres-scroll-header', window.scrollY >= 50);
});

/*=============== SWIPER HOMES ===============*/
const cumbresHomeSwiper = new Swiper('.cumbres-home__swiper', {
    loop: true,
    speed: 800,
    parallax: true,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: number => '0' + number,
        formatFractionTotal: number => '0' + number
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/*=============== MAPA INTERACTIVO ===============*/
document.addEventListener('DOMContentLoaded', function () {
  const map = L.map('cumbres-interactive-map', {
      scrollWheelZoom: false, // Deshabilitado al inicio
      dragging: true,
      touchZoom: true,
      doubleClickZoom: true,
      zoomControl: true
  }).setView([20.35, -98.4823], 10);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const cumbresLocations = [
      {
          name: "Cumbres del Sol - Campestre",
          coords: [20.0784, -98.4823],
          img: "https://th.bing.com/th/id/R.db7b7f51a8816ff9c08e2342598ed4cb?rik=JI89URI6OpQf6g&pid=ImgRaw&r=0",
          link: "https://www.google.com/maps?q=20.0784,-98.4823",
          description: "Desarrollo campestre con lotes residenciales en un entorno natural incomparable."
      }
  ];

  const cumbresIcon = L.divIcon({
      html: '<i class="ri-map-pin-fill" style="font-size: 36px; color:rgb(0, 0, 0);"></i>',
      className: 'custom-div-icon',
      iconSize: [30, 42],
      iconAnchor: [15, 42],
      popupAnchor: [0, -42]
  });

  cumbresLocations.forEach(loc => {
      L.marker(loc.coords, { icon: cumbresIcon }).addTo(map)
          .bindPopup(`
              <div class="cumbres-popup-content">
                  <b>${loc.name}</b>
                  <img src="${loc.img}" alt="${loc.name}">
                  <p>${loc.description}</p>
                  <a href="${loc.link}" target="_blank"><i class="ri-road-map-line"></i> Cómo llegar</a>
              </div>
          `);
  });

  L.polygon([
      [20.0800, -98.4850],
      [20.0850, -98.4800],
      [20.0830, -98.4750],
      [20.0770, -98.4750],
      [20.0750, -98.4790],
      [20.0780, -98.4840]
  ], {
      color: '#006600',
      fillColor: '#88cc88',
      fillOpacity: 0.4,
      weight: 2
  }).addTo(map).bindPopup("Desarrollo Cumbres del Sol");

  // Añadir un botón de control para activar/desactivar el zoom con scroll
  const zoomControlButton = document.createElement('div');
  zoomControlButton.className = 'zoom-control-button';
  zoomControlButton.innerHTML = '<button id="toggle-zoom">Activar zoom con scroll</button>';
  document.querySelector('#cumbres-interactive-map').parentNode.insertBefore(zoomControlButton, document.querySelector('#cumbres-interactive-map').nextSibling);

  let zoomActive = false;
  const toggleButton = document.getElementById('toggle-zoom');

  toggleButton.addEventListener('click', function() {
      if (zoomActive) {
          map.scrollWheelZoom.disable();
          zoomActive = false;
          toggleButton.textContent = 'Activar zoom con scroll';
      } else {
          map.scrollWheelZoom.enable();
          zoomActive = true;
          toggleButton.textContent = 'Desactivar zoom con scroll';
      }
  });

  // El mapa ya no activa automáticamente el zoom con scroll al hacer clic
  // Solo se activará/desactivará mediante el botón
});
/*=============== DISEÑO ===============*/
// Carrusel de propuestas de diseño
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.diseno-personalizado__carousel-slide');
    const dots = document.querySelectorAll('.diseno-personalizado__carousel-dot');
    const prevBtn = document.querySelector('.diseno-personalizado__carousel-btn.prev');
    const nextBtn = document.querySelector('.diseno-personalizado__carousel-btn.next');
    let currentSlide = 0;
    
    function showSlide(n) {
      // Ocultar slide actual
      slides[currentSlide].classList.remove('active');
      dots[currentSlide].classList.remove('active');
      
      // Calcular el nuevo índice
      currentSlide = (n + slides.length) % slides.length;
      
      // Mostrar nuevo slide
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }
    
    // Eventos de botones
    prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
    
    // Eventos de puntos indicadores
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showSlide(index));
    });
    
    // Cambio automático de diapositivas
    setInterval(() => showSlide(currentSlide + 1), 5000);
  });

  /*=============== JAVASCRIPT PARA SECCIÓN CONTACTO ===============*/
document.addEventListener('DOMContentLoaded', function() {
    // Elementos de botones para abrir modales
    const scheduleBtn = document.getElementById('cumbres-schedule-btn');
    const whatsappBtn = document.getElementById('cumbres-whatsapp-btn');
    const financingBtn = document.getElementById('cumbres-financing-btn');
    const newsletterBtn = document.getElementById('cumbres-newsletter-btn');
    const financingAdviserBtn = document.getElementById('cumbres-financing-adviser-btn');
    
    // Elementos de modales
    const scheduleModal = document.getElementById('cumbres-schedule-modal');
    const whatsappModal = document.getElementById('cumbres-whatsapp-modal');
    const financingModal = document.getElementById('cumbres-financing-modal');
    const newsletterModal = document.getElementById('cumbres-newsletter-modal');
    
    // Elementos para cerrar modales
    const scheduleClose = document.getElementById('cumbres-schedule-close');
    const whatsappClose = document.getElementById('cumbres-whatsapp-close');
    const financingClose = document.getElementById('cumbres-financing-close');
    const newsletterClose = document.getElementById('cumbres-newsletter-close');
    
    // Función para abrir modal
    function openModal(modal) {
      // Cerrar todos los modales primero
      closeAllModals();
      
      // Abrir el modal especificado
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevenir scroll
      
      // Agregar animación de entrada
      setTimeout(() => {
        modal.style.opacity = '1';
      }, 10);
    }
    
    // Función para cerrar un modal específico
    function closeModal(modal) {
      modal.style.opacity = '0';
      
      setTimeout(() => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
      }, 300);
    }
    
    // Función para cerrar todos los modales
    function closeAllModals() {
      const allModals = document.querySelectorAll('.cumbres-modal');
      allModals.forEach(modal => {
        modal.classList.remove('active');
        modal.style.opacity = '0';
      });
      document.body.style.overflow = ''; // Restaurar scroll
    }
    
    // Event listeners para abrir modales
    if (scheduleBtn) {
      scheduleBtn.addEventListener('click', () => openModal(scheduleModal));
    }
    
    if (whatsappBtn) {
      whatsappBtn.addEventListener('click', () => openModal(whatsappModal));
    }
    
    if (financingBtn) {
      financingBtn.addEventListener('click', () => openModal(financingModal));
    }
    
    if (newsletterBtn) {
      newsletterBtn.addEventListener('click', () => openModal(newsletterModal));
    }
    
    // El botón de asesor en el modal de financiamiento abre el modal de agendar cita
    if (financingAdviserBtn) {
      financingAdviserBtn.addEventListener('click', () => {
        closeModal(financingModal);
        setTimeout(() => {
          openModal(scheduleModal);
        }, 300);
      });
    }
    
    // Event listeners para cerrar modales
    if (scheduleClose) {
      scheduleClose.addEventListener('click', () => closeModal(scheduleModal));
    }
    
    if (whatsappClose) {
      whatsappClose.addEventListener('click', () => closeModal(whatsappModal));
    }
    
    if (financingClose) {
      financingClose.addEventListener('click', () => closeModal(financingModal));
    }
    
    if (newsletterClose) {
      newsletterClose.addEventListener('click', () => closeModal(newsletterModal));
    }
    
    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener('click', (e) => {
      if (e.target.classList.contains('cumbres-modal')) {
        closeModal(e.target);
      }
    });
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllModals();
      }
    });
    
    // Prevenir envío de formularios (para demostración)
    const forms = document.querySelectorAll('.cumbres-modal__form, .cumbres-newsletter__form');
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí iría la lógica para procesar el formulario
        alert('¡Formulario enviado correctamente!');
        closeAllModals();
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.cumbres-footer__link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Obtener el atributo href
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});