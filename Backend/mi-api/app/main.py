from fastapi import FastAPI
from app.routers import router as api_router

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to mi-api!"}

app.include_router(api_router)