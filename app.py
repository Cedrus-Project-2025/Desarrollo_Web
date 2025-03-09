from flask import Flask, render_template

app = Flask(__name__)

# Ruta para la página principal
@app.route('/')
def home():
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

    return render_template('index.html', home=home_data, about=about_data)

# Si tienes más secciones en 'sections/', puedes definir más rutas
@app.route('/projects/cumbres')
def cumbres():

    return render_template('projects/cumbres.html')


if __name__ == '__main__':
    app.run(debug=True)
