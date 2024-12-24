const getEnvVariable = (key) => {
    const value = import.meta.env[key];
    if (!value) {
      throw new Error(`Environment variable ${key} is not defined`);
    }
    return value;
  };
  
  export const config = {
    resumeUrl: () => getEnvVariable('VITE_RESUME_URL'),
    blobToken: () => getEnvVariable('VITE_BLOB_READ_WRITE_TOKEN')
  };