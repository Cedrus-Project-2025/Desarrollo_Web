/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}
/*=============== SCROLL SUAVE ===============*/
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault(); // Evita el comportamiento por defecto

        const targetId = this.getAttribute("href").substring(1); // Obtiene el ID del destino
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth" // Hace que el desplazamiento sea suave
            });
        }
    });
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    
    // Aseguramos que header exista antes de proceder
    if (header) {
        // Si no tiene la clase de transición, la añadimos primero (solo una vez)
        if (!header.classList.contains('header-transition')) {
            header.classList.add('header-transition');
        }
        
        // Cambia el color de fondo del header cuando el scroll es mayor a 50 pixels
        if (this.scrollY >= 50) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    }
}

// Añadimos la clase de transición inmediatamente al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    if (header) {
        header.classList.add('header-transition');
    }
});

window.addEventListener('scroll', scrollHeader);
/*=============== SWIPER HOMES ===============*/
const swiperHome = new Swiper('.home__swiper', {
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

/*=============== SWIPER TESTIMONIALS ===============*/
document.addEventListener('DOMContentLoaded', function() {
    // Crear elementos de navegación específicos para esta sección
    const testimonialsContainer = document.querySelector('.testimonials__container');
    
    // Verificar si ya existen los elementos para evitar duplicados
    if (!document.querySelector('.testimonials__pagination')) {
        // Crear contenedor de paginación específico
        const paginationEl = document.createElement('div');
        paginationEl.className = 'testimonials__pagination';
        testimonialsContainer.appendChild(paginationEl);
    }
    
    if (!document.querySelector('.testimonials__nav-prev')) {
        // Crear botones de navegación específicos
        const prevButton = document.createElement('div');
        prevButton.className = 'testimonials__nav-prev';
        
        // Añadir el icono directamente
        const prevIcon = document.createElement('i');
        prevIcon.className = 'ti ti-chevron-compact-left';
        prevButton.appendChild(prevIcon);
        
        testimonialsContainer.appendChild(prevButton);
    }
    
    if (!document.querySelector('.testimonials__nav-next')) {
        const nextButton = document.createElement('div');
        nextButton.className = 'testimonials__nav-next';
        
        // Añadir el icono directamente
        const nextIcon = document.createElement('i');
        nextIcon.className = 'ti ti-chevron-compact-right';
        nextButton.appendChild(nextIcon);
        
        testimonialsContainer.appendChild(nextButton);
    }
    
    // Destruir instancia previa de Swiper si existe
    let swiperTestimonials = document.querySelector('.testimonials__swiper').swiper;
    if (swiperTestimonials) {
        swiperTestimonials.destroy(true, true);
    }
    
    // Inicializar Swiper con los controles personalizados
    swiperTestimonials = new Swiper('.testimonials__swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        speed: 800,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        grabCursor: true,
        // Usar los controles personalizados
        navigation: {
            nextEl: '.testimonials__nav-next',
            prevEl: '.testimonials__nav-prev',
        },
        // Paginación personalizada
        pagination: {
            el: '.testimonials__pagination',
            clickable: true,
            bulletClass: 'testimonials__pagination-bullet',
            bulletActiveClass: 'testimonials__pagination-bullet-active',
            renderBullet: function(index, className) {
                return '<span class="' + className + '"></span>';
            }
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        },
        // Ajustar posición de los botones después de inicializar
        on: {
            init: function() {
                setTimeout(adjustNavButtons, 100);
            },
            resize: function() {
                setTimeout(adjustNavButtons, 100);
            }
        }
    });
    
    // Función para ajustar la posición de los botones de navegación
    function adjustNavButtons() {
        const swiperHeight = document.querySelector('.testimonials__swiper').offsetHeight;
        const prevButton = document.querySelector('.testimonials__nav-prev');
        const nextButton = document.querySelector('.testimonials__nav-next');
        
        if (prevButton && nextButton) {
            // Para bajar los botones, usa un valor como 1.2, 1.3, etc.
            prevButton.style.top = (swiperHeight * 1.18) + 'px';
            nextButton.style.top = (swiperHeight * 1.18) + 'px';
        }
    }
    
    // Asegurarse de que la sección tenga la altura correcta
    function updateSectionHeight() {
        const swiperHeight = document.querySelector('.testimonials__swiper').offsetHeight;
        const paginationHeight = document.querySelector('.testimonials__pagination').offsetHeight;
        const section = document.querySelector('.testimonials.section');
        
        // Ajustar altura mínima para la sección
        const minHeight = swiperHeight + paginationHeight + 80; // Añadir margen
        if (section && section.offsetHeight < minHeight) {
            section.style.minHeight = minHeight + 'px';
        }
        
        // Ajustar botones de navegación
        adjustNavButtons();
    }
    
    // Actualizar altura después de que el swiper esté listo
    setTimeout(updateSectionHeight, 500);
    
    // Actualizar también en resize
    window.addEventListener('resize', updateSectionHeight);
});


/*=============== CONTACT CENTER FUNCTIONALITY ===============*/
document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const contactItems = document.querySelectorAll('.contact-center__item');
    const popups = document.querySelectorAll('.popup');
    const closeButtons = document.querySelectorAll('.popup-close-button');
    const forms = document.querySelectorAll('.popup-form');

    // Configuración de WhatsApp
    const whatsappNumber = '1234567890'; // Reemplazar con el número real
    const whatsappMessage = 'Hola, me gustaría recibir más información.'; // Mensaje predeterminado

    // Función para mostrar popup
    const showPopup = (popupId) => {
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.style.display = 'flex';
            // Enfoca el primer input si existe
            const firstInput = popup.querySelector('input');
            if (firstInput) firstInput.focus();
            
            // Accesibilidad - Atrapar el foco dentro del modal
            popup.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden'; // Prevenir scroll
        }
    };

    // Función para cerrar popup
    const closePopup = (popup) => {
        popup.style.display = 'none';
        popup.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Restaurar scroll
        
        // Resetear formulario si existe
        const form = popup.querySelector('form');
        if (form) form.reset();
        
        // Remover mensajes de error y éxito
        popup.querySelectorAll('.error-message, .success-message').forEach(el => el.remove());
        popup.querySelectorAll('input, select, textarea').forEach(input => {
            input.style.borderColor = '';
        });
    };

    // Función para validar teléfono
    const validatePhone = (phone) => {
        // Permitir formatos internacionales con + y varios formatos comunes
        const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        return phoneRegex.test(phone.trim());
    };

    // Función para validar email
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email.trim());
    };

    // Función para validar fecha
    const validateDate = (date) => {
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Resetear hora para comparar solo fechas
        return selectedDate >= today;
    };

    // Manejo de clicks en los items de contacto
    contactItems.forEach(item => {
        const handleActivation = () => {
            const type = item.dataset.modal;

            // Manejo especial para WhatsApp
            if (type === 'whatsapp') {
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
                window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                return;
            }

            showPopup(`popup-${type}`);
        };
        
        // Click event
        item.addEventListener('click', handleActivation);
        
        // Keyboard event for accessibility
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleActivation();
            }
        });
    });

    // Cerrar popups con botón
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const popup = button.closest('.popup');
            if (popup) closePopup(popup);
        });
    });

    // Cerrar al hacer click fuera
    popups.forEach(popup => {
        popup.addEventListener('click', (e) => {
            if (e.target === popup) closePopup(popup);
        });
    });

    // Prevenir cierre al hacer click dentro del popup
    popups.forEach(popup => {
        popup.querySelector('.popup-content').addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });

    // Manejo del teclado para accesibilidad
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Cerrar popup activo con ESC
            const activePopup = document.querySelector('.popup[style*="display: flex"]');
            if (activePopup) closePopup(activePopup);
        }
    });

    // Inicializar contadores de caracteres para textareas
    document.querySelectorAll('textarea[maxlength]').forEach(textarea => {
        const maxLength = parseInt(textarea.getAttribute('maxlength'));
        
        // Crear y añadir el contador de caracteres
        const charCount = document.createElement('div');
        charCount.className = 'character-count';
        charCount.innerHTML = `<span>0</span>/${maxLength} caracteres`;
        textarea.parentElement.appendChild(charCount);
        
        // Actualizar contador al escribir
        textarea.addEventListener('input', () => {
            const currentLength = textarea.value.length;
            const countSpan = charCount.querySelector('span');
            countSpan.textContent = currentLength;
            
            // Cambiar color cuando se acerca al límite
            if (currentLength >= maxLength * 0.9) {
                countSpan.style.color = 'orange';
            } else if (currentLength >= maxLength * 0.95) {
                countSpan.style.color = 'red';
            } else {
                countSpan.style.color = '';
            }
            
            // Asegurar que no exceda el límite (por seguridad)
            if (currentLength > maxLength) {
                textarea.value = textarea.value.substring(0, maxLength);
                countSpan.textContent = maxLength;
            }
        });
    });

    // Manejo de formularios
    forms.forEach(form => {
        // Validación en tiempo real
        form.querySelectorAll('input, select, textarea').forEach(input => {
            input.addEventListener('input', () => {
                validateField(input);
            });
            
            // Eventos blur para validar al perder foco
            input.addEventListener('blur', () => {
                if (input.value) validateField(input);
            });
        });

        // Manejo de envío
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const formType = form.closest('.popup').id;
            let isValid = true;

            // Validar todos los campos
            form.querySelectorAll('input, select, textarea').forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });

            // Validación específica según tipo de formulario
            if (formType === 'popup-schedule' || formType === 'popup-advisor') {
                const phone = formData.get('phone');
                const date = formData.get('date');
                
                if (!validatePhone(phone)) {
                    isValid = false;
                    showError(form.querySelector('[name="phone"]'), 'Teléfono inválido');
                }
                
                if (!validateDate(date)) {
                    isValid = false;
                    showError(form.querySelector('[name="date"]'), 'La fecha debe ser igual o posterior a hoy');
                }
                
                // Validación específica para el formulario de asesor
                if (formType === 'popup-advisor' && formData.get('email')) {
                    const email = formData.get('email');
                    if (!validateEmail(email)) {
                        isValid = false;
                        showError(form.querySelector('[name="email"]'), 'Email inválido');
                    }
                }
            }
            
            if (formType === 'popup-data') {
                const email = formData.get('email');
                if (!validateEmail(email)) {
                    isValid = false;
                    showError(form.querySelector('[name="email"]'), 'Email inválido');
                }
            }

            if (isValid) {
                // Aquí iría la lógica de envío al servidor
                console.log('Datos del formulario:', Object.fromEntries(formData));
                
                // Mensaje personalizado según el tipo de formulario
                let successMessage = '¡Formulario enviado con éxito!';
                
                if (formType === 'popup-schedule') {
                    successMessage = '¡Tu llamada ha sido programada con éxito!';
                } else if (formType === 'popup-advisor') {
                    successMessage = '¡Tu cita con un asesor ha sido agendada con éxito!';
                } else if (formType === 'popup-data') {
                    successMessage = '¡Tus datos han sido recibidos, pronto te contactaremos!';
                }
                
                // Mostrar mensaje de éxito
                showSuccessMessage(form, successMessage);
                
                // Cerrar popup después de un momento
                setTimeout(() => {
                    closePopup(form.closest('.popup'));
                }, 3000);
            }
        });
    });

    // Función para mostrar error en campo
    const showError = (input, message) => {
        // Remover mensaje anterior si existe
        const existingError = input.parentElement.querySelector('.error-message');
        if (existingError) existingError.remove();
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        
        input.parentElement.appendChild(errorDiv);
        input.style.borderColor = 'red';
        input.setAttribute('aria-invalid', 'true');
        input.setAttribute('aria-describedby', 'error-message');
    };

    // Función para validar campo individual
    const validateField = (input) => {
        // Remover mensaje anterior si existe
        const errorDiv = input.parentElement.querySelector('.error-message');
        if (errorDiv) errorDiv.remove();
        
        input.style.borderColor = '';
        input.removeAttribute('aria-invalid');
        input.removeAttribute('aria-describedby');

        // Validar campos obligatorios
        if (input.required && !input.value.trim()) {
            showError(input, 'Este campo es obligatorio');
            return false;
        }

        // Validaciones específicas por tipo
        if (input.type === 'tel' && input.value && !validatePhone(input.value)) {
            showError(input, 'Formato de teléfono inválido');
            return false;
        }
        if (input.type === 'email' && input.value && !validateEmail(input.value)) {
            showError(input, 'Formato de email inválido');
            return false;
        }
        if (input.type === 'date' && input.value && !validateDate(input.value)) {
            showError(input, 'La fecha debe ser igual o posterior a hoy');
            return false;
        }
        if (input.tagName === 'SELECT' && input.value === '') {
            showError(input, 'Seleccione una opción');
            return false;
        }
        
        return true;
    };

    // Función para mostrar mensaje de éxito
    const showSuccessMessage = (form, message = '¡Formulario enviado con éxito!') => {
        // Remover mensaje anterior si existe
        const existingMessage = form.querySelector('.success-message');
        if (existingMessage) existingMessage.remove();
        
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;
        successDiv.setAttribute('role', 'status');
        
        form.appendChild(successDiv);
    };
    
    // Función para deshabilitar fechas pasadas en los inputs de tipo date
    const setMinDates = () => {
        const today = new Date().toISOString().split('T')[0];
        document.querySelectorAll('input[type="date"]').forEach(dateInput => {
            dateInput.setAttribute('min', today);
        });
    };
    
    // Inicializar fechas mínimas
    setMinDates();
});
/*=============== MAP FUNCTIONALITY ===============*/
function initializeResidenciasMap() {
    const mapContainer = document.getElementById('residencias-interactive-map');
    
    const zoom = parseInt(mapContainer.getAttribute('data-zoom'));
    const centerLat = parseFloat(mapContainer.getAttribute('data-center-lat'));
    const centerLng = parseFloat(mapContainer.getAttribute('data-center-lng'));
    const marcadores = JSON.parse(mapContainer.getAttribute('data-marcadores'));

    const map = L.map('residencias-interactive-map', {
        scrollWheelZoom: false,
        dragging: true,
        touchZoom: true,
        doubleClickZoom: true,
        zoomControl: true
    }).setView([centerLat, centerLng], zoom);

    map.scrollWheelZoom.disable();

    map.on('click', function () {
        map.scrollWheelZoom.disable();
    });

    mapContainer.addEventListener('click', function () {
        this.classList.add('active');
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const customIcon = '<i class="ti ti-map-pin" style="font-size: 36px; color:rgb(0, 0, 0);"></i>';
    const residenciasIcon = L.divIcon({
        html: customIcon,
        className: 'custom-div-icon',
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0, -42]
    });

    marcadores.forEach(loc => {
        L.marker([loc.latitud, loc.longitud], { icon: residenciasIcon })
            .addTo(map)
            .bindPopup(
                `<div class="residencias-popup-content">
                    <b>${loc.nombre}</b>
                    <p>${loc.descripcion}</p>
                    <img src="${loc.imagen}" alt="${loc.nombre}" style="width: 100%; margin-top: 5px;">
                    <a href="${loc.link}" target="_blank"><i class="ti ti-map-pin-2"></i> Cómo llegar</a>
                </div>`
            );
    });

    map.zoomControl.setPosition('topright');
}

// Espera a que el DOM esté listo
document.addEventListener('DOMContentLoaded', initializeResidenciasMap);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
   const scrollDown = window.scrollY;

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
         sectionsClass?.classList.add('active-link');
      } else {
         sectionsClass?.classList.remove('active-link');
      }
   });
}
window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
   const scrollUp = document.getElementById('scroll-up');
   // Cuando el scroll es mayor a 350vh, añade la clase show-scroll
   this.scrollY >= 350 ? scrollUp?.classList.add('show-scroll')
                      : scrollUp?.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
/*=============== SCROLL SECTIONS ===============*/
document.querySelectorAll('.footer__link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

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


// Script para desplazamiento suave al hacer clic en enlaces del footer
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los enlaces del footer que podrían dirigir a secciones internas
    const footerLinks = document.querySelectorAll('.cumbres-footer__link, .cumbres-footer__contact-link, .cumbres-footer__cta-button, .cumbres-footer__terms-link');
    
    footerLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Verificar si el enlace es interno (comienza con # o contiene # después del nombre de la página)
        if (href && (href.startsWith('#') || (href.includes('#') && !href.startsWith('http')))) {
          // Prevenir comportamiento predeterminado
          e.preventDefault();
          
          let targetId;
          
          // Extraer el ID del elemento destino
          if (href.startsWith('#')) {
            targetId = href;
          } else {
            // Si es formato página.html#seccion
            targetId = '#' + href.split('#')[1];
          }
          
          // Buscar el elemento destino
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            // Realizar desplazamiento suave
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            });
          } else {
            // Si no encuentra el elemento en la página actual, navegar normalmente
            window.location.href = href;
          }
        }
      });
    });
  });