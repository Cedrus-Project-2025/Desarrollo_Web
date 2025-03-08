from flask import Flask, render_template

app = Flask(__name__)

# Ruta para la página principal
@app.route('/')
def home():
    request = {
        'titulo':"Este es el fkin titulo",
        'subtitulo':'faaaaak'
    }
    
    
    return render_template('index.html',valores=request)

# Si tienes más secciones en 'sections/', puedes definir más rutas
@app.route('/projects/cumbres')
def cumbres():
    
    
    return render_template('projects/cumbres.html')


if __name__ == '__main__':
    app.run(debug=True)
