def obtener_configs():
    '''
    Funcion que obtiene las configuraciones para la pag.

    ### Args:
    Ninguno

    ### Returns:
    * tupla (tuple[dictionary]): home_data, about_data, services_data, testimonials_data, contact_center_data, mapa_data, footer_data
    '''

    # ==================== HOME ====================
    # Datos para la sección Home del index.html
    home_data = {
        # Primer slide
        'slide1_subtitulo': 'Architecture',
        'slide1_titulo_parte1': 'Modern',
        'slide1_titulo_parte2': 'Lake house',
        'slide1_boton_texto': 'Ver Proyecto',
        'slide1_imagen': 'static/img/home-1.jpg',
        
        # Segundo slide
        'slide2_subtitulo': 'Architecture',
        'slide2_titulo_parte1': 'Luxury House',
        'slide2_titulo_parte2': 'In The Forest',
        'slide2_boton_texto': 'Ver Detalles',
        'slide2_imagen': 'static/img/home-2.jpg',
        
        # Tercer slide
        'slide3_subtitulo': 'Architecture',
        'slide3_titulo_parte1': 'Modern House',
        'slide3_titulo_parte2': 'On The Rock',
        'slide3_boton_texto': 'Conocer Más',
        'slide3_imagen': 'static/img/home-3.jpg',
        
        # Cuarto slide
        'slide4_subtitulo': 'Architecture',
        'slide4_titulo_parte1': 'Luxury',
        'slide4_titulo_parte2': 'Curved House',
        'slide4_boton_texto': 'Explorar',
        'slide4_imagen': 'static/img/home-4.jpg',
        
        # Enlaces sociales
        'social_facebook': '#',
        'social_instagram': '#',
        'social_twitter': '#',
        
        # Ruta para el botón del primer slide
        'ruta_cumbres': 'cumbres'
    }
    
    # ==================== ABOUT ====================
    about_data = {
        'about_subtitulo': 'Sobre Nosotros',
        'about_titulo_parte1': 'Construyendo Sueños',
        'about_titulo_parte2': 'Desde 2010',
        'about_descripcion': (
            "Somos una empresa líder en el desarrollo de residencias exclusivas, "
            "comprometidos con la excelencia y la innovación en cada proyecto. "
            "Con presencia en las principales ciudades de la república, "
            "transformamos espacios en hogares excepcionales."
        ),

        # Estadísticas
        'about_experiencia': '13+',
        'about_experiencia_texto': 'Años de Experiencia',
        'about_proyectos': '200+',
        'about_proyectos_texto': 'Proyectos Completados',
        'about_estados': '15',
        'about_estados_texto': 'Estados con Presencia',

        # Imágenes
        'about_imagen1': 'static/img/home-1.jpg',
        'about_imagen2': 'static/img/home-2.jpg'
    }
    
    # ==================== SERVICES ====================
    services_data = {
        'services_subtitulo': 'Nuestros Servicios',
        'services_titulo_parte1': 'Soluciones Integrales',
        'services_titulo_parte2': 'Para Tu Hogar',
        
        # Primera tarjeta de servicio
        'service1_icono': 'ri-home-heart-line',
        'service1_titulo': 'Diseño Residencial',
        'service1_descripcion': 'Creamos espacios únicos que reflejan tu estilo de vida, combinando estética y funcionalidad en cada detalle.',
        
        # Segunda tarjeta de servicio
        'service2_icono': 'ri-building-line',
        'service2_titulo': 'Desarrollo Inmobiliario',
        'service2_descripcion': 'Gestionamos proyectos residenciales completos, desde la conceptualización hasta la entrega final.',
        
        # Tercera tarjeta de servicio
        'service3_icono': 'ri-paint-line',
        'service3_titulo': 'Personalización',
        'service3_descripcion': 'Adaptamos cada espacio a tus necesidades específicas, ofreciendo acabados y materiales de primera calidad.',
        
        # Cuarta tarjeta de servicio
        'service4_icono': 'ri-earth-line',
        'service4_titulo': 'Ubicaciones Premium',
        'service4_descripcion': 'Desarrollamos proyectos en las zonas más exclusivas y con mayor plusvalía de la república.'
    }
    
    # ==================== TESTIMONIALS ====================
    testimonials_data = {
        'testimonials_subtitulo': 'Testimonios',
        'testimonials_titulo_parte1': 'Lo que dicen nuestros',
        'testimonials_titulo_parte2': 'clientes',
        
        # Lista de testimonios
        'testimonios': [
            {
                'avatar': 'static/img/avatar1.jpg',
                'rating': 5,  # Número de estrellas (de 1 a 5)
                'descripcion': 'Excelente ubicación y acabados de primera. La atención fue excepcional.',
                'nombre': 'Carlos Ramírez',
                'ubicacion': 'Viñedos 2 Residencial'
            },
            {
                'avatar': 'static/img/avatar1.jpg',
                'rating': 5,
                'descripcion': 'Excelente ubicación y acabados de primera. La atención fue excepcional.',
                'nombre': 'Karla Ramírez',
                'ubicacion': 'Viñedos 2 Residencial'
            },
            {
                'avatar': 'static/img/avatar1.jpg',
                'rating': 5,
                'descripcion': 'Excelente ubicación y acabados de primera. La atención fue excepcional.',
                'nombre': 'Carlos Ramírez',
                'ubicacion': 'Viñedos 2 Residencial'
            },
            {
                'avatar': 'static/img/avatar1.jpg',
                'rating': 5,
                'descripcion': 'Excelente ubicación y acabados de primera. La atención fue excepcional.',
                'nombre': 'Carlos Ramírez',
                'ubicacion': 'Viñedos 2 Residencial'
            }
        ]
    }
    
    # ==================== CONTACT CENTER ====================
    contact_center_data = {
        'contact_subtitulo': 'Contacto',
        'contact_titulo': 'Centro de atención telefónica',
        
        # Opciones de contacto
        'opciones_contacto': [
            {
                # Informacion sobre "PROGRAMAR LLAMADA"
                'icono': 'ri-calendar-2-line',
                'titulo': 'Programa una llamada',
                'descripcion': 'Elige tu horario',
                'modal': 'schedule',
                'aria_label': 'Programar una llamada'
            },
            {
                # Informacion sobre "DEJAR TUS DATOS"
                'icono': 'ri-mail-send-line',
                'titulo': 'Deja tus datos',
                'descripcion': 'Te contactamos',
                'modal': 'data',
                'aria_label': 'Dejar tus datos'
            },
            {
                # Informacion sobre "AGENDAR VISITA"
                'icono': 'ri-user-star-line',
                'titulo': 'Agenda una visita',
                'descripcion': 'Habla con un asesor',
                'modal': 'advisor',
                'aria_label': 'Agenda una visita con un asesor'
            },
            {
                # Informacion sobre "COTACTO POR WHATSAPP"
                'icono': 'ri-whatsapp-line',
                'titulo': 'Contacto directo',
                'descripcion': 'WhatsApp',
                'modal': 'whatsapp',
                'aria_label': 'Contactar por WhatsApp'
            }
        ],
        
        # Información de contacto
        'telefono': '800 1080 108',
        'horario': 'L-V: 8:00 - 21:00 | S-D: 8:00 - 21:00',
        
        # Información de modales
        'modales': {
            'schedule': {
                'titulo': 'Programa tu llamada',
                'horarios': [
                    {'valor': 'morning', 'texto': '8:00 - 12:00'},
                    {'valor': 'afternoon', 'texto': '12:00 - 16:00'},
                    {'valor': 'evening', 'texto': '16:00 - 21:00'}
                ]
            },
            'data': {
                'titulo': 'Déjanos tus datos'
            },
            'advisor': {
                'titulo': 'Agenda una visita con un asesor',
                'sucursales': [
                    {'valor': 'centro', 'texto': 'Sucursal Centro'},
                    {'valor': 'norte', 'texto': 'Sucursal Norte'},
                    {'valor': 'sur', 'texto': 'Sucursal Sur'}
                ],
                'horas': [
                    {'valor': '09:00', 'texto': '09:00'},
                    {'valor': '10:00', 'texto': '10:00'},
                    {'valor': '11:00', 'texto': '11:00'},
                    {'valor': '12:00', 'texto': '12:00'},
                    {'valor': '13:00', 'texto': '13:00'},
                    {'valor': '16:00', 'texto': '16:00'},
                    {'valor': '17:00', 'texto': '17:00'},
                    {'valor': '18:00', 'texto': '18:00'}
                ]
            }
        }
    }
    
    # ==================== MAPA ====================
    mapa_data = {
        'mapa_subtitulo': 'Ubicaciones',
        'mapa_titulo': 'Conoce nuestros proyectos',
        'mapa_zoom_inicial': 5,
        'mapa_centro_latitud': 23.634501,
        'mapa_centro_longitud': -102.552784,
        'marcadores': [
            {
                'nombre': 'Residencial Cumbres',
                'latitud': 25.686613,
                'longitud': -100.355682,
                'descripcion': 'Desarrollo residencial de lujo en Monterrey',
                'imagen': 'static/img/home-1.jpg',
                'link': 'https://www.google.com/maps?q=25.686613,-100.355682'
            },
            {
                'nombre': 'Bosques Modernos',
                'latitud': 19.432608,
                'longitud': -99.133209,
                'descripcion': 'Casas sustentables en Ciudad de México',
                'imagen': 'static/img/home-2.jpg',
                'link': 'https://www.google.com/maps?q=19.432608,-99.133209'
            },
            {
                'nombre': 'Lomas del Mar',
                'latitud': 20.634980,
                'longitud': -105.230003,
                'descripcion': 'Villas frente al mar en Puerto Vallarta',
                'imagen': 'static/img/home-3.jpg',
                'link': 'https://www.google.com/maps?q=20.634980,-105.230003'
            },
            {
                'nombre': 'Sierra Vista',
                'latitud': 28.632996,
                'longitud': -106.069099,
                'descripcion': 'Residencias de montaña en Chihuahua',
                'imagen': 'static/img/home-4.jpg',
                'link': 'https://www.google.com/maps?q=28.632996,-106.069099'
            }
        ]
    }
    
    # ==================== FOOTER ====================
    footer_data = {
        # Columna principal
        'footer_logo': 'Architecture',
        'footer_descripcion': 'Transformamos espacios en hogares excepcionales con presencia en las principales ciudades de México.',
        
        # Enlaces sociales
        'footer_social_facebook': '#',
        'footer_social_instagram': '#',
        'footer_social_whatsapp': '#',
        
        # Enlaces rápidos - títulos y links
        'footer_enlaces_titulo': 'Enlaces',
        'footer_link_inicio': '#home-hm',
        'footer_link_nosotros': '#about',
        'footer_link_servicios': '#services',
        'footer_link_contacto': '#contact-center',
        'footer_link_proyectos': '#residencias-mapa-section',
        
        # Sección de contacto
        'footer_contacto_titulo': 'Contacto',
        'footer_contacto_direccion': 'Ciudad de México, México',
        'footer_contacto_telefono': '+52 (55) 1234-5678',
        'footer_contacto_email': 'info@architecture.com',
        
        # Copyright
        'footer_copyright': '© Architecture. Todos los derechos reservados'
    }

    return (home_data, about_data, services_data, testimonials_data, contact_center_data, mapa_data, footer_data)