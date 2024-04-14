import logging

from google.cloud.exceptions import ClientError


def upload_blob(storage_client, bucket_name, source_file_name, destination_blob_name):
    """
    Uploads a file to the bucket.
    :param storage_client: Google Cloud Storage client
    :param bucket_name: The ID of your GCS bucket
    :param source_file_name: The path to your file to upload
    :param destination_blob_name: The ID of your GCS object
    :return:
    """

    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)

    try:
        blob.upload_from_filename(source_file_name)
    except ClientError as e:
        logging.error(e)
        return False
    return True
