from fastapi import APIRouter

from routers import upload

api_router = APIRouter()

api_router.include_router(upload.router)
