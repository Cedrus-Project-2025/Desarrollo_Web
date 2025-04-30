import sys
import os
# Obtener la ruta absoluta a la carpeta raíz del proyecto
root_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../"))
# Añadir la ruta raíz al PYTHONPATH
sys.path.insert(0, root_path)

from api_methods import API_Methods
from dotenv import load_dotenv
load_dotenv()

def obtener_configs_general():
    try:
        api = API_Methods(url=os.getenv("URL_API"))
        code, request = api.GET(
            endpoint="/api/w/general"
        )
        home_data = request['data']['home_data']
        about_data = request['data']['about_data']
        services_data = request['data']['services_data']
        testimonials_data = request['data']['testimonials_data']
        contact_center_data = request['data']['contact_center_data']
        mapa_data = request['data']['mapa_data']
        footer_data = request['data']['footer_data']
        
        return (home_data, about_data, services_data, testimonials_data, contact_center_data, mapa_data, footer_data)
    except Exception as e:
        print(f"Error en obtener_configs_general: {e}")
        raise
    
if __name__ == '__main__':
    obtener_configs_general()