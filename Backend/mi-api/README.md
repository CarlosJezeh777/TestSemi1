# Mi API

Este proyecto es una API construida con FastAPI. A continuación se presentan las instrucciones para instalar y ejecutar la API.

## Requisitos

Asegúrate de tener Python 3.7 o superior instalado en tu sistema.

## Instalación

1. Clona el repositorio:

   ```
   git clone <URL_DEL_REPOSITORIO>
   cd mi-api
   ```

2. Crea un entorno virtual (opcional pero recomendado):

   ```
   python -m venv venv
   source venv/bin/activate  # En Windows usa `venv\Scripts\activate`
   ```

3. Instala las dependencias:

   ```
   pip install -r requirements.txt
   ```

## Ejecución

Para ejecutar la API, utiliza el siguiente comando:

```
uvicorn app.main:app --reload
```

Esto iniciará el servidor en `http://127.0.0.1:8000`.

## Documentación

La documentación interactiva de la API está disponible en `http://127.0.0.1:8000/docs` una vez que el servidor esté en funcionamiento.

## Estructura del Proyecto

- `app/main.py`: Punto de entrada de la aplicación.
- `app/routers/`: Contiene las rutas de la API.
- `app/models/`: Define los modelos de datos.
- `app/schemas/`: Define los esquemas de validación de datos.
- `app/services/`: Contiene la lógica de negocio.
- `requirements.txt`: Lista de dependencias.
- `.gitignore`: Archivos y directorios a ignorar por Git.