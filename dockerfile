# ========== Comando para crear y levantar docker
# clear; docker build -t permont-web . && docker run -d --name PermontWEB -p 501:501 permont-web
# ========== 

# Imagen base de Python
FROM python:3.13-slim

# Establecer directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY . /app

# Instalar dependencias desde requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Exponer el puerto en el que corre Flask
EXPOSE 501

# Ejecutar la aplicación
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:501", "app:app"]
