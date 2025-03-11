def obtener_configs_cumbres():
    '''
    Funcion que obtiene las configuraciones para la pag.

    ### Args:
    Ninguno

    ### Returns:
    * tupla (tuple[dictionary]): home_data, about_data, services_data, testimonials_data, contact_center_data, mapa_data, footer_data
    '''

    # ==================== HOME ====================
    home_data_cumbres = {
        # Configuración general
        'titulo': 'Cumbres Del Sol',
        'subtitulo': 'Residencial exclusivo',
        
        # Slides para el carrusel
        'slides': [
            {
                'subtitulo': 'Cumbres Del Sol',
                'titulo_parte1': 'Residencia Mirador',
                'titulo_parte2': 'Vista al Mar',
                'boton_texto': 'Ver detalles',
                'boton_link': '#descripcion',
                'imagen': '../static/img/cumbres-1.jpg', 
                'alt': 'Residencia Mirador'
            },
            {
                'subtitulo': 'Cumbres Del Sol',
                'titulo_parte1': 'Residencia Bosque',
                'titulo_parte2': 'Entre Pinos',
                'boton_texto': '', # Este slide no parece tener botón en el HTML
                'boton_link': '',
                'imagen': '../static/img/cumbres-2.jpg',
                'alt': 'Residencia Bosque'
            },
            {
                'subtitulo': 'Cumbres Del Sol',
                'titulo_parte1': 'Residencia Roca',
                'titulo_parte2': 'Arquitectura Moderna',
                'boton_texto': 'Ver detalles',
                'boton_link': '#caracteristicas',
                'imagen': 'static/img/cumbres-3.jpg',
                'alt': 'Residencia Roca'
            },
            {
                'subtitulo': 'Cumbres Del Sol',
                'titulo_parte1': 'Residencia Curva',
                'titulo_parte2': 'Diseño Exclusivo',
                'boton_texto': 'Ver detalles',
                'boton_link': '#planos',
                'imagen': 'static/img/cumbres-4.jpg',
                'alt': 'Residencia Curva'
            }
        ],
        
        # Enlaces de redes sociales
        'social_facebook': '#',
        'social_instagram': '#',
        'social_twitter': '#',
        
        # Navegación
        'nav_inicio': '#cumbres-home',
        'nav_descripcion': '#descripcion',
        'nav_caracteristicas': '#caracteristicas',
        'nav_galeria': '#galeria',
        'nav_planos': '#planos',
        'nav_ubicacion': '#ubicacion',
        'nav_contacto': '#contacto'
    }
    
    # ==================== ABOUT ====================
    about_data_cumbres = {
        # Título y subtítulo principal
        'titulo': '¿Quiénes Somos?',
        'subtitulo': 'Un Refugio en Armonía con la Naturaleza',
        
        # Contenido principal
        'descripcion': [
            'En <span class="cumbres-about__highlight">Cumbres del Sol</span>, creemos que la vida debe disfrutarse con tranquilidad, rodeados de naturaleza y en un entorno seguro. Ubicado en las majestuosas montañas de <span class="cumbres-about__highlight">Singuilucan, Hidalgo</span>, nuestro desarrollo campestre ha sido diseñado para quienes buscan un equilibrio entre comodidad, bienestar y una conexión genuina con el entorno natural.',
            'Nuestra comunidad es el lugar ideal para familias, jubilados e inversionistas que desean un espacio exclusivo donde la calidad de vida es una prioridad.'
        ],
        
        # Imagen de la sección
        'imagen': 'static/img/home-1.jpg',
        'imagen_alt': 'Vista panorámica de Cumbres del Sol',
        
        # Sección de valores
        'valores_titulo': 'Nuestros Valores',
        'valores': [
            {
                'icono': 'ri-plant-line',
                'titulo': 'Tranquilidad',
                'descripcion': 'Un ambiente sereno donde cada día es un descanso para el alma.'
            },
            {
                'icono': 'ri-home-heart-line',
                'titulo': 'Naturaleza',
                'descripcion': 'Un espacio rodeado de áreas verdes, diseñado para la vida al aire libre.'
            },
            {
                'icono': 'ri-shield-check-line',
                'titulo': 'Seguridad',
                'descripcion': 'Acceso controlado y comunidad cerrada para la tranquilidad de nuestros residentes.'
            }
        ],
        
        # Conclusión
        'conclusion': 'En <span class="cumbres-about__highlight">Cumbres del Sol</span>, más que un lugar para vivir, hemos creado un estilo de vida en armonía con el entorno. Te invitamos a descubrir un hogar donde la paz, la belleza y el bienestar se encuentran en cada rincón.'
    }
    
    # ==================== MAPA ====================
    mapa_data_cumbres = {
        # HTML configuration
        'titulo': 'Ubicación Privilegiada',
        'descripcion': 'Ubicado en el corazón de las majestuosas montañas de <em>Singuilucan, Hidalgo</em>, <em>Cumbres del Sol</em> es un desarrollo campestre que combina la paz de la naturaleza con la comodidad de la conectividad moderna.',
        'map_id': 'cumbres-interactive-map',
        
        # Map configuration
        'map_center': [20.35, -98.4823],
        'map_zoom': 10,
        'map_options': {
            'scrollWheelZoom': False,
            'dragging': True,
            'touchZoom': True,
            'doubleClickZoom': True,
            'zoomControl': True
        },
        'tiles_url': 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        'tiles_attribution': '&copy; OpenStreetMap contributors',
        
        # Locations
        'locations': [
            {
                'name': 'Cumbres del Sol - Campestre',
                'coords': [20.0784, -98.4823],
                'img': 'https://th.bing.com/th/id/R.db7b7f51a8816ff9c08e2342598ed4cb?rik=JI89URI6OpQf6g&pid=ImgRaw&r=0',
                'link': 'https://www.google.com/maps?q=20.0784,-98.4823',
                'description': 'Desarrollo campestre con lotes residenciales en un entorno natural incomparable.'
            }
        ],
        
        # Marker icon - Aseguramos que todos los valores estén correctamente definidos
        'marker_icon': {
            'html': '<i class="ri-map-pin-fill" style="font-size: 36px; color:rgb(0, 0, 0);"></i>',
            'className': 'custom-div-icon',
            'iconSize': [30, 42],
            'iconAnchor': [15, 42],
            'popupAnchor': [0, -42]
        },
        
        # Polygon
        'polygon': {
            'coords': [
                [20.0800, -98.4850],
                [20.0850, -98.4800],
                [20.0830, -98.4750],
                [20.0770, -98.4750],
                [20.0750, -98.4790],
                [20.0780, -98.4840]
            ],
            'color': '#006600',
            'fillColor': '#88cc88',
            'fillOpacity': 0.4,
            'weight': 2,
            'popupText': 'Desarrollo Cumbres del Sol'
        },
        
        # Zoom control button
        'zoom_control': {
            'active_text': 'Desactivar zoom con scroll',
            'inactive_text': 'Activar zoom con scroll'
        }
    }
    
    
    # ==================== AMENIDADES ====================
    amenidades_data_cumbres = {
        'titulo': 'Amenidades que Inspiran',
        'descripcion': (
            'Descubre las exclusivas amenidades de <em>Cumbres del Sol</em>, diseñadas para brindar comodidad, '
            'bienestar y experiencias inolvidables en un entorno natural. Aquí, cada espacio ha sido pensado para '
            'enriquecer tu estilo de vida y ofrecer momentos de relajación, convivencia y conexión con la naturaleza.'
        ),
        'amenidades': [
            {
                'titulo': 'Áreas Verdes',
                'descripcion': 'Disfruta de amplias áreas verdes rodeadas de flora autóctona, perfectas para caminatas matutinas, meditación o simplemente relajarte en un ambiente de paz y armonía.',
                'icono': 'ri-plant-line',
                'imagen': 'static/img/home-2.jpg',
                'alt': 'Áreas Verdes'
            },
            {
                'titulo': 'Asadores',
                'descripcion': 'Vive momentos inolvidables con familiares y amigos en nuestra zona de asadores. Diseñados para reuniones al aire libre donde puedas preparar deliciosos platillos.',
                'icono': 'ri-restaurant-line',
                'imagen': 'static/img/cumbres-4.jpg',
                'alt': 'Asadores'
            },
            {
                'titulo': 'Fogatero',
                'descripcion': 'Imagina una noche despejada, el sonido de la naturaleza y un cálido fuego iluminando la velada. El lugar ideal para compartir historias y crear recuerdos inolvidables.',
                'icono': 'ri-fire-line',
                'imagen': 'static/img/cumbres-4.jpg',
                'alt': 'Fogatero'
            },
            {
                'titulo': 'Temazcal',
                'descripcion': 'Sumérgete en una experiencia ancestral con nuestro temazcal, un espacio diseñado para la relajación y el bienestar físico y mental.',
                'icono': 'ri-rest-time-line',
                'imagen': 'static/img/cumbres-4.jpg',
                'alt': 'Temazcal'
            },
            {
                'titulo': 'Área de Camping',
                'descripcion': 'Para los amantes de la aventura, contamos con un área de camping donde puedes instalar tu tienda y disfrutar de una noche bajo las estrellas.',
                'icono': 'ri-tent-line',
                'imagen': 'static/img/cumbres-4.jpg',
                'alt': 'Área de Camping'
            },
            {
                'titulo': 'Palapas',
                'descripcion': 'Nuestras palapas ofrecen sombra y comodidad en un entorno natural, ideales para reuniones, eventos o simplemente para disfrutar de un día al aire libre.',
                'icono': 'ri-home-smile-line',
                'imagen': 'static/img/cumbres-1.jpg',
                'alt': 'Palapas'
            },
            {
                'titulo': 'Acceso Controlado',
                'descripcion': 'Tu bienestar es nuestra prioridad. <em>Cumbres del Sol</em> es un desarrollo con acceso controlado, brindando seguridad a nuestros residentes y visitantes.',
                'icono': 'ri-lock-star-line',
                'imagen': 'static/img/cumbres-2.jpg',
                'alt': 'Acceso Controlado'
            },
            {
                'titulo': 'Baños',
                'descripcion': 'Nuestras instalaciones cuentan con baños limpios y bien equipados en las áreas comunes, asegurando el máximo confort para residentes y visitantes.',
                'icono': 'ri-service-line',
                'imagen': 'static/img/cumbres-4.jpg',
                'alt': 'Baños'
            },
            {
                'titulo': 'Pet Friendly',
                'descripcion': 'Sabemos que tu mascota es parte de tu familia. Encuentra un entorno amigable para ellos, con espacios abiertos donde pueden correr, jugar y explorar con seguridad.',
                'icono': 'ri-footprint-line',
                'imagen': 'static/img/cumbres-3.jpg',
                'alt': 'Pet Friendly'
            }
        ]
    }
    
    # ==================== DISEÑO Y PERSONALIZACIÓN ====================
    diseno_personalizado_data_cumbres = {
        'titulo': 'Diseño y Personalización de tu Hogar',
        'descripcion': 'En <em>Cumbres del Sol</em>, no solo adquieres un lote, sino la oportunidad de construir un hogar que se adapte a tu estilo de vida y necesidades. Con una variedad de opciones en materiales y combinaciones, puedes diseñar una casa única en armonía con la naturaleza.',
        
        # Mapa de lotes
        'mapa_imagen': 'static/img/mapa.png',
        'mapa_alt': 'Mapa General de Lotes en Cumbres del Sol',
        
        # Características principales
        'caracteristicas': [
            {
                'titulo': 'Lotes con Diferentes Dimensiones',
                'descripcion': 'Cada terreno en <em>Cumbres del Sol</em> cuenta con medidas variadas para ajustarse a distintos proyectos arquitectónicos y necesidades. Ya sea que busques un espacio más compacto y funcional o un terreno amplio para desarrollar una casa con áreas recreativas, aquí encontrarás la opción ideal.',
                'icono': 'ri-landscape-line',
                'imagen': 'static/img/cumbres-5.jpg',
                'alt': 'Lotes con Diferentes Dimensiones'
            },
            {
                'titulo': 'Estilo de Construcción a tu Medida',
                'descripcion': 'Cada hogar puede ser diseñado con un enfoque personalizado, eligiendo entre diferentes materiales que ofrecen ventajas estéticas y funcionales.',
                'icono': 'ri-home-gear-line',
                'imagen': 'static/img/cumbres-4.jpg',
                'alt': 'Estilo de Construcción a tu Medida'
            }
        ],
        
        # Materiales de construcción
        'materiales_titulo': 'Materiales de Construcción',
        'materiales': [
            {
                'nombre': 'Tabique',
                'descripcion': 'Construcción tradicional, resistente y con excelente aislamiento térmico.',
                'icono': 'ri-home-3-line'
            },
            {
                'nombre': 'Madera',
                'descripcion': 'Un diseño cálido y acogedor, ideal para quienes buscan un entorno rústico y natural.',
                'icono': 'ri-home-4-line'
            },
            {
                'nombre': 'Piedra',
                'descripcion': 'Solidez y elegancia que se integran perfectamente con el paisaje.',
                'icono': 'ri-home-7-line'
            },
            {
                'nombre': 'Combinaciones',
                'descripcion': 'Mezcla de materiales para lograr una estética equilibrada y un mayor aprovechamiento de sus propiedades.',
                'icono': 'ri-stack-line'
            }
        ],
        
        # Carrusel de propuestas de diseño
        'propuestas_titulo': 'Propuestas de Diseño',
        'propuestas_descripcion': 'Te ofrecemos diferentes opciones arquitectónicas basadas en la combinación de materiales, optimizando distribución, iluminación y funcionalidad.',
        'propuestas_icono': 'ri-palette-line',
        'propuestas_slides': [
            {
                'imagen': 'static/img/cumbres-4.jpg',
                'alt': 'Propuesta de Diseño 1',
                'caption': 'Modelo Contemporáneo'
            },
            {
                'imagen': 'static/img/cumbres-3.jpg',
                'alt': 'Propuesta de Diseño 2',
                'caption': 'Diseño Mediterráneo'
            },
            {
                'imagen': 'static/img/cumbres-2.jpg',
                'alt': 'Propuesta de Diseño 3',
                'caption': 'Estilo Minimalista'
            }
        ],
        'propuestas_estilos': [
            {
                'nombre': 'Contemporáneo',
                'icono': 'ri-home-5-line'
            },
            {
                'nombre': 'Mediterráneo',
                'icono': 'ri-home-4-line'
            },
            {
                'nombre': 'Minimalista',
                'icono': 'ri-home-3-line'
            }
        ]
    }
    
    # ==================== CONTACTO ====================
    contacto_data_cumbres = {
        # Configuración general
        'titulo': 'Contacto',
        'descripcion': 'En <span class="cumbres-contact__highlight">Cumbres del Sol</span>, estamos listos para asesorarte en cada paso de tu inversión. Ponte en contacto con nosotros a través de las siguientes opciones:',
        
        # Opciones de contacto
        'opciones': [
            {
                'id': 'cumbres-schedule',
                'icono': 'ri-calendar-line',
                'titulo': 'Agendar una Cita',
                'descripcion': 'Programa una visita personalizada para conocer los lotes disponibles y resolver todas tus dudas.',
                'boton_texto': 'Agendar ahora',
                'boton_id': 'cumbres-schedule-btn'
            },
            {
                'id': 'cumbres-whatsapp',
                'icono': 'ri-whatsapp-line',
                'titulo': 'WhatsApp',
                'descripcion': 'Comunícate de manera rápida y directa con nuestro equipo para recibir atención inmediata.',
                'boton_texto': 'Contactar',
                'boton_id': 'cumbres-whatsapp-btn'
            },
            {
                'id': 'cumbres-financing',
                'icono': 'ri-money-dollar-circle-line',
                'titulo': 'Financiamiento',
                'descripcion': 'Te ofrecemos opciones flexibles para adquirir tu lote sin comprometer tu estabilidad financiera.',
                'boton_texto': 'Ver opciones',
                'boton_id': 'cumbres-financing-btn'
            },
            {
                'id': 'cumbres-newsletter',
                'icono': 'ri-mail-send-line',
                'titulo': 'Boletín Informativo',
                'descripcion': 'Suscríbete para recibir actualizaciones sobre el proyecto, promociones y novedades.',
                'boton_texto': 'Suscribirme',
                'boton_id': 'cumbres-newsletter-btn'
            }
        ],
        
        # Modal Agenda
        'agenda_modal': {
            'id': 'cumbres-schedule-modal',
            'titulo': 'Agenda tu visita personalizada',
            'descripcion': 'Te mostraremos en detalle las opciones de construcción y los beneficios de nuestra comunidad.',
            'campos': [
                {
                    'id': 'cumbres-name',
                    'label': 'Nombre completo',
                    'tipo': 'text',
                    'placeholder': 'Ingresa tu nombre',
                    'required': True
                },
                {
                    'id': 'cumbres-email',
                    'label': 'Correo electrónico',
                    'tipo': 'email',
                    'placeholder': 'correo@ejemplo.com',
                    'required': True
                },
                {
                    'id': 'cumbres-phone',
                    'label': 'Teléfono',
                    'tipo': 'tel',
                    'placeholder': 'Tu número de contacto',
                    'required': True
                },
                {
                    'id': 'cumbres-date',
                    'label': 'Fecha de visita',
                    'tipo': 'date',
                    'placeholder': '',
                    'required': True
                }
            ],
            'horarios': [
                {'value': '10:00', 'label': '10:00 AM'},
                {'value': '11:00', 'label': '11:00 AM'},
                {'value': '12:00', 'label': '12:00 PM'},
                {'value': '13:00', 'label': '1:00 PM'},
                {'value': '16:00', 'label': '4:00 PM'},
                {'value': '17:00', 'label': '5:00 PM'}
            ],
            'boton_texto': 'Confirmar cita'
        },
        
        # Modal WhatsApp
        'whatsapp_modal': {
            'id': 'cumbres-whatsapp-modal',
            'titulo': 'Contacto directo vía WhatsApp',
            'descripcion': 'Nuestro equipo de asesores está listo para atenderte de inmediato.',
            'horario': 'Horario de atención: Lunes a Viernes 9:00 AM - 6:00 PM | Sábados 10:00 AM - 2:00 PM',
            'whatsapp_numero': '1234567890',
            'whatsapp_texto': 'Iniciar chat ahora'
        },
        
        # Modal Financiamiento
        'financiamiento_modal': {
            'id': 'cumbres-financing-modal',
            'titulo': 'Planes de Financiamiento',
            'subtitulo': 'Soluciones flexibles para tu inversión',
            'planes': [
                {
                    'icono': 'ri-coin-line',
                    'titulo': 'Plan Básico',
                    'destacado': False,
                    'items': [
                        'Enganche desde 20%',
                        'Mensualidades fijas hasta 3 años',
                        'Sin revisión de buró de crédito'
                    ]
                },
                {
                    'icono': 'ri-building-line',
                    'titulo': 'Plan Integral',
                    'destacado': True,
                    'tag': 'Recomendado',
                    'items': [
                        'Lote + Construcción en un solo financiamiento',
                        'Tasas preferenciales',
                        'Plazos hasta 15 años',
                        'Asesoría personalizada'
                    ]
                },
                {
                    'icono': 'ri-bank-line',
                    'titulo': 'Plan Empresarial',
                    'destacado': False,
                    'items': [
                        'Beneficios fiscales',
                        'Inversión a largo plazo',
                        'Opciones para desarrolladores'
                    ]
                }
            ],
            'contacto_texto': 'Agenda una asesoría personalizada para encontrar el plan ideal para ti',
            'contacto_boton_texto': 'Contactar a un asesor',
            'contacto_boton_id': 'cumbres-financing-adviser-btn'
        },
        
        # Modal Newsletter
        'newsletter_modal': {
            'id': 'cumbres-newsletter-modal',
            'titulo': 'Suscríbete a nuestro boletín',
            'descripcion': 'Mantente informado sobre las últimas novedades y promociones exclusivas.',
            'beneficios_titulo': 'Ventajas de estar suscrito:',
            'beneficios': [
                {'icono': 'ri-star-line', 'texto': 'Ofertas exclusivas para suscriptores'},
                {'icono': 'ri-notification-line', 'texto': 'Noticias anticipadas sobre el proyecto'},
                {'icono': 'ri-calendar-event-line', 'texto': 'Invitaciones a eventos especiales'},
                {'icono': 'ri-price-tag-3-line', 'texto': 'Promociones de temporada'}
            ],
            'placeholder': 'Tu correo electrónico',
            'boton_texto': 'Suscribirme',
            'privacidad_texto': 'Acepto recibir comunicaciones y la política de privacidad'
        }
    }
    

    return (home_data_cumbres, about_data_cumbres, mapa_data_cumbres, amenidades_data_cumbres, diseno_personalizado_data_cumbres, contacto_data_cumbres)
