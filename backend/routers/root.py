from fastapi import APIRouter

router = APIRouter(
    prefix="",
    tags=["Upload data to GCS"],
)


@router.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to Fast API."}
