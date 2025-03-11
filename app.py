from flask import Flask, render_template
from static.py.General.configs import obtener_configs_general as obtener_configs_general
from static.py.Cumbres.configs import obtener_configs_cumbres as obtener_configs_cumbres

app = Flask(__name__)

# Ruta para la página principal
@app.route('/')
def home():
    
    home_data, about_data, services_data, testimonials_data, contact_center_data, mapa_data, footer_data = obtener_configs_general()

    return render_template('index.html', 
                       home           = home_data, 
                       about          = about_data,
                       services       = services_data, 
                       testimonials   = testimonials_data,
                       contact_center = contact_center_data,
                       mapa           = mapa_data, 
                       footer         = footer_data
                       )
                       

# Ruta para la página de Cumbres
@app.route('/projects/cumbres')
def cumbres():
    home_data_cumbres, about_data_cumbres, mapa_data_cumbres, amenidades_data_cumbres, diseno_personalizado_data_cumbres, contacto_data_cumbres = obtener_configs_cumbres() 
    
    return render_template('projects/cumbres.html',
        home = home_data_cumbres,
        about = about_data_cumbres,
        mapa = mapa_data_cumbres,
        amenidades_data = amenidades_data_cumbres,
        diseno_personalizado_data = diseno_personalizado_data_cumbres,
        contacto_data = contacto_data_cumbres
    )

if __name__ == '__main__':
    app.run(debug=True)