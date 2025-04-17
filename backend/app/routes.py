from fastapi import APIRouter, HTTPException
from app.models import Message, MessageRecord, LoginResponse, UserCredentials
from app.config import RESPONSES
from utils.history import load_history, save_history
from typing import List
from datetime import datetime, timedelta
import jwt

SECRET_KEY = "techpal0102938"

router = APIRouter()

@router.post("/login", response_model=LoginResponse)
def login(credentials: UserCredentials):
    if credentials.username == "admin" and credentials.password == "password":
        # Generar token JWT
        expiration = datetime.utcnow() + timedelta(hours=1)
        token = jwt.encode({"sub": credentials.username, "exp": expiration}, SECRET_KEY, algorithm="HS256")

        return {"user": {"username": credentials.username}, "token": token}
    else:
        raise HTTPException(status_code=401, detail="Credenciales incorrectas")


@router.post("/message")
def send_message(data: Message):
    history = load_history()
    user_history = history.get(data.user_id, [])

    user_history.append({"sender": "user", "message": data.message})
    # respuesta del bot
    lower_msg = data.message.lower()
    response = RESPONSES.get(lower_msg, "Lo siento, no entiendo tu mensaje.")

    user_history.append({"sender": "bot", "message": response})

    # actualizo el historial del usuario
    history[data.user_id] = user_history

    save_history(history)

    return {"response": response}


@router.get("/history/{user_id}", response_model=List[MessageRecord])
def get_history(user_id: str):
    history = load_history()
    return history.get(user_id, [])
