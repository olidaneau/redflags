from fastapi import APIRouter
from routers import root, upload

api_router = APIRouter()

api_router.include_router(root.router)
api_router.include_router(upload.router)
