import uuid

from fastapi import APIRouter, Depends, HTTPException, UploadFile, status
from fastapi.responses import JSONResponse

from config import settings
from dependencies import gcs_client
from services.gcp.gcs import upload_blob

router = APIRouter(
    prefix="/upload",
    tags=["Upload data to GCS"],
)


@router.post(
    "/",
    status_code=status.HTTP_201_CREATED,
    summary="Upload files to GCS Bucket",
    description="Upload a valid file to GCS bucket",
)
async def upload_file(
    file: UploadFile,
    storage_client=Depends(gcs_client),
    bucket_name=settings.GCS_BUCKET_NAME,
):
    source_file_name = file.filename
    destination_blob_name = str(uuid.uuid4())
    result = upload_blob(
        storage_client, bucket_name, source_file_name, destination_blob_name
    )
    if result:
        return JSONResponse(
            content={
                "message": f"Successfully uploaded {file.filename} to {destination_blob_name}.",
                "file_name": file.filename,
                "blob_name": destination_blob_name,
            },
            status_code=status.HTTP_201_CREATED,
        )
    else:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"There was an error uploading the file {source_file_name} to {destination_blob_name}.",
        )
