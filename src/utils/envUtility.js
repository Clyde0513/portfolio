export const config = {
  resumeUrl: () => process.env.VUE_APP_RESUME_URL,
  blobToken: () => process.env.VUE_APP_BLOB_READ_WRITE_TOKEN 
};