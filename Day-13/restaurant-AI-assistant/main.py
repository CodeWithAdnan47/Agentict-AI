from fastapi import FastAPI
from db.database import Base,engine
from routers import blog,ai_chat

app = FastAPI(
    title="Blog management System"
)

Base.metadata.create_all(bind=engine)

app.include_router(blog.router)
app.include_router(ai_chat.router)

@app.get("/")
def root():
    return {
        "message" : "Application is running..."
    }