from flask import Flask, render_template
from static.py.General.configs import obtener_configs as obtener_configs_general
from static.py.Cumbres.configs import obtener_configs as obtener_configs_cumbres

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
                       
# Si tienes más secciones en 'sections/', puedes definir más rutas
@app.route('/projects/cumbres')
def cumbres():
    return render_template('projects/cumbres.html')


if __name__ == '__main__':
    app.run(debug=True)
