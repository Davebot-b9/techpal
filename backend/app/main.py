from fastapi import FastAPI
from app.routes import router
from fastapi.middleware.cors import CORSMiddleware
from decouple import config

app = FastAPI()

origins = [
    config('FRONTEND_URL')
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'], # 'POST', 'GET', ...
    allow_headers=['*'] # 'Set-Cookie', 'Content-Type', 'Authorization'
)

#registramos las rutas
app.include_router(router)