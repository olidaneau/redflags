from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    GCP_PROJECT_ID: str
    GCS_BUCKET_NAME: str

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


settings = Settings(_env_file=".env", _env_file_encoding="utf-8")
