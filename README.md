# Website (Index) Documentation

## Table of Contents
- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Configuration and Operation](#configuration-and-operation)
  - [app.py File](#apppy-file)
  - [configs.py File](#configspy-file)
  - [index.html File](#indexhtml-file)
- [Website Sections](#website-sections)
  - [Home](#home)
  - [About](#about)
  - [Services](#services)
  - [Testimonials](#testimonials)
  - [Contact Center](#contact-center)
  - [Projects Map](#projects-map)
  - [Footer](#footer)
- [How to Modify the Site](#how-to-modify-the-site)
  - [Changing Content](#changing-content)
  - [Modifying Styles](#modifying-styles)
  - [Adding New Pages](#adding-new-pages)
- [Dependencies](#dependencies)
- [Deployment](#deployment)

## Introduction
This project is a website for an architecture and real estate development company created with Flask. The site features a responsive design and displays information about services, projects, testimonials, and contact methods. The structure is designed to facilitate the management and updating of content through configuration files separate from the HTML code.

## Project Structure
```
desarrollo-web/
├── Dockerfile        ← Docker file for deployment
├── app.py            ← main Flask application file
├── requirements.txt  ← Python dependencies
├── static/           
│   ├── css/          ← CSS files
│   ├── js/           ← JavaScript files
│   ├── img/          ← site images
│   └── py/           ← Python configuration files
│       ├── General/
│       │   └── configs.py  ← configuration for the main page
│       └── Cumbres/
│           └── configs.py  ← configuration for the Cumbres page
├── templates/
│   ├── index.html    ← main HTML template
│   └── projects/
│       └── cumbres.html  ← template for the Cumbres project
```

## Configuration and Operation

### app.py File
This file is the entry point of the application. It defines the routes and renders the templates with the configuration data.

```python
from flask import Flask, render_template
from static.py.General.configs import obtener_configs_general as obtener_configs_general
from static.py.Cumbres.configs import obtener_configs_cumbres as obtener_configs_cumbres

app = Flask(__name__)

# Route for the main page
@app.route('/')
def home():
    home_data, about_data, services_data, testimonials_data, contact_center_data, mapa_data, footer_data = obtener_configs_general()

    return render_template('index.html', 
                       home = home_data, 
                       about = about_data,
                       services = services_data, 
                       testimonials = testimonials_data,
                       contact_center = contact_center_data,
                       mapa = mapa_data, 
                       footer = footer_data
                       )
                       
# Route for the Cumbres page
@app.route('/projects/cumbres')
def cumbres():
    home_data_cumbres, about_data_cumbres, mapa_data_cumbres, amenidades_data_cumbres, diseno_personalizado_data_cumbres, contacto_data_cumbres, footer_data_cumbres = obtener_configs_cumbres() 
    
    return render_template('projects/cumbres.html',
        home = home_data_cumbres,
        about = about_data_cumbres,
        mapa = mapa_data_cumbres,
        amenidades_data = amenidades_data_cumbres,
        diseno_personalizado_data = diseno_personalizado_data_cumbres,
        contacto_data = contacto_data_cumbres,
        footer_data = footer_data_cumbres
    )

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5000)
```

### configs.py File
The configs.py file contains the `obtener_configs_general()` function that defines all the configuration and content for the main website. This function returns a tuple with dictionaries for each section of the site.

Structure of the `obtener_configs_general()` function:
```python
def obtener_configs_general():
    '''
    Function that obtains the configurations for the page.

    ### Args:
    None

    ### Returns:
    * tuple (tuple[dictionary]): home_data, about_data, services_data, testimonials_data, contact_center_data, mapa_data, footer_data
    '''
    # Configuration for HOME
    home_data = { ... }
    
    # Configuration for ABOUT
    about_data = { ... }
    
    # Configuration for SERVICES
    services_data = { ... }
    
    # Configuration for TESTIMONIALS
    testimonials_data = { ... }
    
    # Configuration for CONTACT CENTER
    contact_center_data = { ... }
    
    # Configuration for MAP
    mapa_data = { ... }
    
    # Configuration for FOOTER
    footer_data = { ... }

    return (home_data, about_data, services_data, testimonials_data, contact_center_data, mapa_data, footer_data)
```

### index.html File
The index.html file is the main template that uses Jinja2 to render the dynamic content provided by the configuration files. The template is structured in sections that correspond to each part of the site (home, about, services, etc.).

## Website Sections

### Home
Main section with an image carousel and navigation links. The configuration is found in `home_data` in the configs.py file.

```python
home_data = {
    # General configuration
    'titulo': 'Architecture',
    'subtitulo': 'Modern Design',
    
    # Slides for the carousel
    'slides': [
        {
            'subtitulo': 'Architecture',
            'titulo_parte1': 'Modern',
            'titulo_parte2': 'Lake house',
            'boton_texto': 'Ver Proyecto',
            'boton_link': '/cumbres',
            'imagen': 'static/img/home-1.jpg',
            'alt': 'Lake house'
        },
        # More slides...
    ],
    
    # Social media links
    'social_facebook': '#',
    'social_instagram': '#',
    'social_twitter': '#',
    
    # Navigation
    'nav_inicio': '#home-hm',
    # Other navigation links...
    
    'ruta_cumbres': 'cumbres'
}
```

### About
Section about the company, with statistics and images. It is configured in `about_data`.

```python
about_data = {
    'about_subtitulo': 'Sobre Nosotros',
    'about_titulo_parte1': 'Construyendo Sueños',
    'about_titulo_parte2': 'Desde 2010',
    'about_descripcion': "Somos una empresa líder en el desarrollo...",
    
    # Statistics
    'about_experiencia': '13+',
    'about_experiencia_texto': 'Años de Experiencia',
    # More statistics...
    
    # Images
    'about_imagen1': 'static/img/home-1.jpg',
    'about_imagen2': 'static/img/home-2.jpg'
}
```

### Services
Shows the services offered by the company in cards. It is configured in `services_data`.

```python
services_data = {
    'services_subtitulo': 'Nuestros Servicios',
    'services_titulo_parte1': 'Soluciones Integrales',
    'services_titulo_parte2': 'Para Tu Hogar',
    
    # Services
    'service1_icono': 'ti ti-building',
    'service1_titulo': 'Diseño Residencial',
    'service1_descripcion': 'Creamos espacios únicos...',
    # More services...
}
```

### Testimonials
Carousel of customer testimonials. It is configured in `testimonials_data`.

```python
testimonials_data = {
    'testimonials_subtitulo': 'Testimonios',
    'testimonials_titulo_parte1': 'Lo que dicen nuestros',
    'testimonials_titulo_parte2': 'clientes',
    
    # List of testimonials
    'testimonios': [
        {
            'avatar': 'static/img/avatar1.jpg',
            'rating': 5,
            'descripcion': 'El diseño del fraccionamiento es moderno...',
            'nombre': 'Carlos Ramírez',
            'ubicacion': 'Viñedos 2 Residencial'
        },
        # More testimonials...
    ]
}
```

### Contact Center
Contact section with different options and forms. It is configured in `contact_center_data`.

```python
contact_center_data = {
    'contact_subtitulo': 'Contacto',
    'contact_titulo': 'Centro de atención telefónica',
    
    # Contact options
    'opciones_contacto': [
        {
            'icono': 'ti ti-phone-call',
            'titulo': 'Programa una llamada',
            'descripcion': 'Elige tu horario',
            'modal': 'schedule',
            'aria_label': 'Programar una llamada'
        },
        # More options...
    ],
    
    # Contact information
    'telefono': '800 1080 108',
    'horario': 'L-V: 8:00 - 21:00 | S-D: 8:00 - 21:00',
    
    # Modals for forms
    'modales': {
        'schedule': { ... },
        'data': { ... },
        'advisor': { ... }
    }
}
```

### Projects Map
Interactive map showing the locations of the projects. It is configured in `mapa_data`.

```python
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
        # More markers...
    ]
}
```

### Footer
Footer with contact information and links. It is configured in `footer_data`.

```python
footer_data = {
    # Main column
    'footer_logo': 'Architecture',
    'footer_descripcion': 'Transformamos espacios en hogares excepcionales...',
    
    # Social links
    'footer_social_facebook': '#',
    'footer_social_instagram': '#',
    'footer_social_whatsapp': '#',
    
    # Quick links
    'footer_enlaces_titulo': 'Enlaces',
    'footer_link_inicio': '#home-hm',
    # More links...
    
    # Contact section
    'footer_contacto_titulo': 'Contacto',
    'footer_contacto_direccion': 'Ciudad de México, México',
    'footer_contacto_telefono': '+52 (55) 1234-5678',
    'footer_contacto_email': 'info@architecture.com',
    
    # Copyright
    'footer_copyright': '© Architecture. Todos los derechos reservados'
}
```

## How to Modify the Site

### Changing Content
To modify the content of the site, edit the corresponding dictionaries in the configs.py file:

1. Locate the section you want to modify (home_data, about_data, etc.)
2. Change the values of the corresponding keys
3. Save the file and restart the application

For example, to change the main title:
```python
# Before
'titulo': 'Architecture',

# After
'titulo': 'Mi Empresa de Arquitectura',
```

### Modifying Styles
The CSS styles are located in the static/css/ folder. The main file is main.css.

### Adding New Pages
To add a new page to the site:

1. Create a new HTML file in the templates/ folder or in an appropriate subfolder
2. Create a new configuration file in static/py/ or use an existing one
3. Add a new route in app.py with the corresponding function

Example to add a new project page:
```python
# In app.py
@app.route('/projects/nuevo-proyecto')
def nuevo_proyecto():
    # Get configuration
    config_data = obtener_configs_nuevo_proyecto()
    
    return render_template('projects/nuevo-proyecto.html', 
                          config=config_data)
```

## Dependencies
The main dependencies of the project are:

- Flask: Web framework
- Jinja2: Template engine (included with Flask)
- Leaflet.js: For the interactive map
- Swiper.js: For the carousels
- Tabler Icons: For the icons

## Deployment
The project is configured to be deployed with Docker. Use the included Dockerfile to create an image and run it:

```bash
docker build -t architecture-web .
docker run -p 5000:5000 architecture-web
```

The application will be available at http://localhost:5000.

# Cumbres Del Sol - Project Documentation

## Table of Contents
- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Server Configuration](#server-configuration)
- [Cumbres Del Sol Page](#cumbres-del-sol-page)
  - [HTML Structure](#html-structure)
  - [Main Sections](#main-sections)
- [Configuration File](#configuration-file)
  - [obtener_configs_cumbres() Function](#obtener_configs_cumbres-function)
  - [Section Configurations](#section-configurations)
- [Content Modification](#content-modification)
  - [Changing Text](#changing-text)
  - [Updating Images](#updating-images)
  - [Modifying Links](#modifying-links)
- [Interactive Components](#interactive-components)
  - [Main Carousel](#main-carousel)
  - [Interactive Map](#interactive-map)
  - [Contact Modals](#contact-modals)
- [External Resources](#external-resources)
- [Development Tips](#development-tips)

## Introduction
This project implements the website for "Cumbres Del Sol," a countryside residential development located in Singuilucan, Hidalgo. The site is built using Flask as the backend, with Jinja2 as the template engine to render HTML pages. The architecture separates content from presentation through Python configuration files that feed the HTML templates.

## Project Structure
```
desarrollo-web/
├── Dockerfile
├── app.py                     # Main Flask application
├── requirements.txt           # Python dependencies
├── static/
│   ├── css/                   # CSS files
│   │   └── cumbres.css        # Specific styles for Cumbres page
│   ├── js/                    # JavaScript files
│   │   ├── cumbres.js         # Specific functionality for Cumbres page
│   │   ├── mapa_cumbres.js    # Implementation of the interactive map
│   │   └── chatbot-loader.js  # Chatbot loader
│   ├── img/                   # Site images
│   └── py/                    # Python configuration files
│       └── Cumbres/
│           └── configs.py     # Specific configurations for Cumbres
├── templates/
│   ├── index.html             # Main site page
│   └── projects/
│       └── cumbres.html       # HTML template for Cumbres
```

## Server Configuration
The `app.py` file handles the Flask server configuration and defines the routes for the different pages of the website:

```python
from flask import Flask, render_template
from static.py.General.configs import obtener_configs_general
from static.py.Cumbres.configs import obtener_configs_cumbres

app = Flask(__name__)

# Route for the main page
@app.route('/')
def home():
    home_data, about_data, services_data, testimonials_data, contact_center_data, mapa_data, footer_data = obtener_configs_general()
    return render_template('index.html', home=home_data, about=about_data, services=services_data, 
                          testimonials=testimonials_data, contact_center=contact_center_data, 
                          mapa=mapa_data, footer=footer_data)

# Route for the Cumbres page
@app.route('/projects/cumbres')
def cumbres():
    home_data_cumbres, about_data_cumbres, mapa_data_cumbres, amenidades_data_cumbres, diseno_personalizado_data_cumbres, contacto_data_cumbres, footer_data_cumbres = obtener_configs_cumbres()
    return render_template('projects/cumbres.html', home=home_data_cumbres, about=about_data_cumbres, 
                          mapa=mapa_data_cumbres, amenidades_data=amenidades_data_cumbres, 
                          diseno_personalizado_data=diseno_personalizado_data_cumbres, 
                          contacto_data=contacto_data_cumbres, footer_data=footer_data_cumbres)

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5000)
```

## Cumbres Del Sol Page

### HTML Structure
The `cumbres.html` file is structured in several sections that make up the complete page:

```html
<!DOCTYPE html>
<html lang="es">
<head>
   <!-- Meta, title, CSS links and scripts -->
</head>
<body>
   <!-- Header -->
   <header class="cumbres-header" id="cumbres-header">
       <!-- Navigation -->
   </header>

   <!-- Main content -->
   <main class="cumbres-main">
       <!-- Sections: Home, About, Map, Amenities, Design, Contact -->
   </main>

   <!-- Footer -->
   <footer class="cumbres-footer">
       <!-- Footer information -->
   </footer>

   <!-- Scripts -->
</body>
</html>
```

### Main Sections

- **Header**: Contains the logo and navigation bar with links to different sections of the page.
- **Home**: A carousel of images with featured information about the residential development.
- **About**: Information about the development, values, and main characteristics.
- **Map**: Shows the location of the development on an interactive map with Leaflet.
- **Amenities**: Services and facilities offered by the residential development.
- **Design and Customization**: Design options, materials, and proposals for housing construction.
- **Contact**: Forms and options for visitors to get in touch or request information.
- **Footer**: Contact information, quick links, social networks, and service hours.

## Configuration File

### obtener_configs_cumbres() Function
The `configs.py` file contains the `obtener_configs_cumbres()` function that provides all the necessary configuration for each section of the page:

```python
def obtener_configs_cumbres():
    '''
    Function that gets the configurations for the page.

    ### Returns:
    * tuple (tuple[dictionary]): home_data, about_data, services_data, testimonials_data, contact_center_data, mapa_data, footer_data
    '''
    
    # Definition of each configuration dictionary by section
    home_data_cumbres = {...}
    about_data_cumbres = {...}
    mapa_data_cumbres = {...}
    amenidades_data_cumbres = {...}
    diseno_personalizado_data_cumbres = {...}
    contacto_data_cumbres = {...}
    footer_data_cumbres = {...}
    
    return (home_data_cumbres, about_data_cumbres, mapa_data_cumbres, amenidades_data_cumbres, diseno_personalizado_data_cumbres, contacto_data_cumbres, footer_data_cumbres)
```

### Section Configurations
Each section of the page has its own configuration dictionary:

- **Home** (`home_data_cumbres`):
  - Main carousel configuration
  - Slides with titles, subtitles, and links
  - Social media links

- **About** (`about_data_cumbres`):
  - Descriptive information of the development
  - Values and main characteristics
  - Illustrative images

- **Map** (`mapa_data_cumbres`):
  - Leaflet map configuration
  - Coordinates and zoom
  - Featured locations and polygons

- **Amenities** (`amenidades_data_cumbres`):
  - List of amenities with descriptions
  - Icons and visual elements

- **Design** (`diseno_personalizado_data_cumbres`):
  - Material options
  - Style proposals
  - Lot characteristics

- **Contact** (`contacto_data_cumbres`):
  - Contact options (appointments, WhatsApp, financing, newsletter)
  - Modal configuration
  - Forms

- **Footer** (`footer_data_cumbres`):
  - Contact information
  - Quick links
  - Social networks
  - Service hours

## Content Modification

### Changing Text
To modify texts, locate the corresponding dictionary in `configs.py` and update the values:

```python
# Example - Modify the About section title
about_data_cumbres = {
    'titulo': 'New Title',  # Change this text
    'subtitulo': 'A Refuge in Harmony with Nature',
    # rest of the dictionary...
}
```

### Updating Images
To change images, update the paths in the corresponding dictionary:

```python
# Example - Update image in the main carousel
home_data_cumbres = {
    'slides': [
        {
            'subtitulo': 'Cumbres Del Sol',
            'titulo_parte1': 'Mirador Residence',
            'titulo_parte2': 'Sea View',
            'boton_texto': 'Return',
            'boton_link': '/',
            'imagen': '../static/img/new-image.jpg',  # Change this path
            'alt': 'Mirador Residence'
        },
        # more slides...
    ],
    # rest of the dictionary...
}
```

### Modifying Links
To update links, change the values of the corresponding keys:

```python
# Example - Modify WhatsApp link
contacto_data_cumbres = {
    'opciones': [
        # other options...
        {
            'id': 'cumbres-whatsapp',
            'icono': 'ti ti-brand-whatsapp',
            'titulo': 'WhatsApp',
            'descripcion': 'Communicate quickly and directly with our team...',
            'boton_texto': 'Contact',
            'modal': {
                # modal content...
                'link': 'https://wa.me/5512345678',  # Update this number
                'boton_texto': 'Start chat now'
            }
        },
        # more options...
    ],
    # rest of the dictionary...
}
```

## Interactive Components

### Main Carousel
The main carousel uses the Swiper JS library and is configured in `home_data_cumbres`:

```python
home_data_cumbres = {
    'slides': [
        {
            'subtitulo': 'Cumbres Del Sol',
            'titulo_parte1': 'Mirador Residence',
            'titulo_parte2': 'Sea View',
            'boton_texto': 'Return',
            'boton_link': '/',
            'imagen': '../static/img/cumbres-1.jpg',
            'alt': 'Mirador Residence'
        },
        # Add more slides here following the same format
    ],
    # rest of the configuration...
}
```

To add a new slide, simply add a new dictionary to the `slides` array.

### Interactive Map
The map uses Leaflet and is configured in `mapa_data_cumbres`:

```python
mapa_data_cumbres = {
    'map_center': [20.35, -98.4823],  # Central coordinates [latitude, longitude]
    'map_zoom': 10,                   # Initial zoom level
    'locations': [
        {
            'name': 'Cumbres del Sol - Campestre',
            'coords': [20.0784, -98.4823],  # [latitude, longitude]
            'img': 'Image_URL',
            'link': 'https://www.google.com/maps?q=20.0784,-98.4823',
            'description': 'Place description'
        },
        # Add more locations following the same format
    ],
    'polygon': {
        'coords': [
            [20.0800, -98.4850],
            [20.0850, -98.4800],
            # More coordinates to form the polygon
        ],
        'color': '#006600',
        'fillColor': '#88cc88',
        'fillOpacity': 0.4,
        'weight': 2,
        'popupText': 'Cumbres del Sol Development'
    },
    # Rest of the configuration...
}
```

### Contact Modals
Contact modals are configured in `contacto_data_cumbres` and are activated via JavaScript:

```python
contacto_data_cumbres = {
    'opciones': [
        {
            'id': 'cumbres-schedule',  # Unique ID for the modal
            'icono': 'ti ti-calendar-clock',
            'titulo': 'Schedule an Appointment',
            'descripcion': 'Schedule a personalized visit...',
            'boton_texto': 'Schedule now',
            'modal': {
                'titulo': 'Schedule your personalized visit',
                'descripcion': 'We will show you in detail the options...',
                'form': {
                    'campos': [
                        {'label': 'Full name', 'type': 'text', 'id': 'cumbres-name', 'placeholder': 'Enter your name'},
                        # More form fields
                    ],
                    'boton_texto': 'Confirm appointment'
                }
            }
        },
        # More contact options...
    ],
}
```

## External Resources
The site uses several external resources:

- **Tabler Icons**: Icons used throughout the site
  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css">
  ```

- **Swiper JS**: For the main carousel
  ```html
  <link rel="stylesheet" href="../static/css/swiper-bundle.min.css">
  <script src="../static/js/swiper-bundle.min.js"></script>
  ```

- **Leaflet**: For the interactive map
  ```html
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  ```

## Development Tips

- **CSS Modification**: Specific styles are found in `static/css/cumbres.css`. Modify this file to change the appearance of the site.
- **Custom JavaScript**: Specific functionality is found in `static/js/cumbres.js` and `static/js/mapa_cumbres.js`. Modify these files to change interactive behavior.
- **HTML Template**: If you need to add new sections or elements, modify `templates/projects/cumbres.html`.
- **Images**: Place new images in `static/img/` and update paths in `configs.py`.
- **Development Mode**: To test changes locally, change `debug=False` to `debug=True` in `app.py`:
  ```python
  if __name__ == '__main__':
      app.run(debug=True, host='0.0.0.0', port=5000)
  ```

### Development Cycle:

1. Modify configuration files (`configs.py`)
2. Update HTML templates if necessary
3. Restart the Flask server to apply changes
4. Access the page at http://localhost:5000/projects/cumbres

> **Note**: In HTML, Jinja2 variables are accessed using `{{ variable }}` and loops/conditionals are expressed as `{% for item in items %} ... {% endfor %}`.