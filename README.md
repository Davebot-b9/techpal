# Chatbot Vite

## Descripción del Proyecto

TechPal Chat es una aplicación web diseñada para facilitar la interacción con un chatbot de soporte tecnico. El proyecto está dividido en dos partes principales:

1. **Backend**: Construido con FastAPI, maneja la lógica del servidor y las interacciones con el chatbot.
2. **Frontend**: Desarrollado con React y Vite, proporciona una interfaz de usuario moderna y responsiva.

## Estructura del Proyecto

```
backend/
    app/
        config.py
        main.py
        models.py
        routes.py
    utils/
        history.py
    requirements.txt
techpal/
    src/
        components/
        context/
        hooks/
        pages/
    public/
    package.json
```

## Requisitos Previos

- Python 3.12 o superior
- Node.js 18 o superior
- npm 9 o superior

## Configuración del Entorno

### Backend

1. Navega al directorio del backend:
   ```bash
   cd backend
   ```

2. Crea un entorno virtual:
   ```bash
   python -m venv venv
   ```

3. Activa el entorno virtual:
   - En Windows:
     ```bash
     venv\Scripts\activate
     ```
   - En macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. Instala las dependencias:
   ```bash
   pip install -r requirements.txt
   ```

5. Inicia el servidor:
   ```bash
   uvicorn app.main:app --reload
   ```

### Frontend

1. Navega al directorio del frontend:
   ```bash
   cd techpal
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Uso

1. Asegúrate de que tanto el backend como el frontend estén corriendo.
2. Accede a la aplicación en tu navegador en `http://localhost:5173`.
3. agrega un archivo donde almacenes tus entornos virtuales agrega la variable con el nombre de tu preferencia y como valor la url del paso 2.

## Tecnologías Utilizadas

### Backend
- FastAPI
- Uvicorn
- Pydantic

### Frontend
- React
- Vite
- TailwindCSS
- HeroUI
- Axios

## Contribución

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad:
   ```bash
   git checkout -b nueva-funcionalidad
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Sube tus cambios:
   ```bash
   git push origin nueva-funcionalidad
   ```
5. Abre un Pull Request.
