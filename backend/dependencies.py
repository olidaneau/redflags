from config import settings
from google.cloud import storage

gcs_bucket_name = settings.GCS_BUCKET_NAME


def gcs_client() -> storage.Client:
    gcs_client = storage.Client(project=settings.GCP_PROJECT_ID)
    return gcs_client
