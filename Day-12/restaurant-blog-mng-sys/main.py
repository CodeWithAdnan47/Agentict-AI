from fastapi import FastAPI
from db.database import engine, Base

# 👇 import models BEFORE create_all
from models import menu  

Base.metadata.create_all(bind=engine)

app = FastAPI()

from routers import menu as menu_router
app.include_router(menu_router.router)