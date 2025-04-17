from pydantic import BaseModel

class Message(BaseModel):
    user_id: str
    message: str

class MessageRecord(BaseModel):
    sender: str
    message: str
    
class UserCredentials(BaseModel):
    username: str
    password: str

class LoginResponse(BaseModel):
    user: dict
    token: str