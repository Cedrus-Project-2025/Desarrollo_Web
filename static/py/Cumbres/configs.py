import sys
import os
# Obtener la ruta absoluta a la carpeta raíz del proyecto
root_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../"))
# Añadir la ruta raíz al PYTHONPATH
sys.path.insert(0, root_path)

from api_methods import API_Methods
from dotenv import load_dotenv
load_dotenv()

def obtener_configs_cumbres():
    try:
        api = API_Methods(url=os.getenv("URL_API"))
        code, request = api.GET(
            endpoint="/api/w/proyectos"
        )
        
        home_data_cumbres = request['data']['home_data_cumbres']
        about_data_cumbres = request['data']['about_data_cumbres']
        mapa_data_cumbres = request['data']['mapa_data_cumbres']
        amenidades_data_cumbres = request['data']['amenidades_data_cumbres']
        diseno_personalizado_data_cumbres = request['data']['diseno_personalizado_data_cumbres']  # Corregido el nombre de la clave
        contacto_data_cumbres = request['data']['contacto_data_cumbres']  # Usando .get() con valor por defecto
        footer_data_cumbres = request['data']['footer_data_cumbres']
        
        return (home_data_cumbres, about_data_cumbres, mapa_data_cumbres, amenidades_data_cumbres, diseno_personalizado_data_cumbres, contacto_data_cumbres, footer_data_cumbres)

    except KeyError as e:
        print(f"Error de clave en obtener_configs_cumbres: {e}")
        # Podemos añadir más diagnóstico para ver qué tenemos realmente
        print(f"Claves disponibles en request['data']: {request['data'].keys()}")
        raise

    except Exception as e:
        print(f"Error en obtener_configs_cumbres: {e}")
        raise

    
if __name__ == '__main__':
    obtener_configs_cumbres()