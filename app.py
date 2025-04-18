from flask import Flask, render_template, request, jsonify
import os
import requests  
from dotenv import load_dotenv
from static.py.General.configs import obtener_configs_general as obtener_configs_general
from static.py.Cumbres.configs import obtener_configs_cumbres as obtener_configs_cumbres
import json 

# Cargar variables de entorno
load_dotenv()

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

# Nueva ruta para la API del chatbot
@app.route('/api/chatbot', methods=['POST'])
def chatbot_api():
    try:
        data = request.json
        pregunta = data.get('pregunta')
        
        # Obtener la URL de la API desde las variables de entorno con validación
        URL_API = os.getenv('URL_API')
        if not URL_API:
            app.logger.error("URL_API no está definida en las variables de entorno")
            return jsonify({"respuesta": "Lo siento, hay un problema de configuración en el servidor. Por favor, contacta al administrador."}), 500
        
        # Hacer la solicitud POST a la API externa
        response = requests.post(f'{URL_API}/api/a/chat', data=json.dumps({"pregunta": pregunta}), headers={"Content-Type": "application/json; charset=utf-8"})
        response.raise_for_status()  # Lanza una excepción si hay un error HTTP
        
        # Obtener la respuesta de la API externa
        respuesta = response.json().get('respuesta', 'No se pudo obtener una respuesta')
        
        return jsonify({"respuesta": respuesta})
    
    except Exception as e:
        app.logger.error(f"Error en la API del chatbot: {e}")
        return jsonify({"respuesta": "Lo siento, ocurrió un error al procesar tu solicitud. Por favor, intenta de nuevo más tarde."}), 500
    
if __name__ == '__main__':
    app.run(debug=True)