const env = {
    development: {
      API_URL: '',
      BASE_URL: '',
    },
    production: {
      API_URL: '',
      BASE_URL: '',
    },
    test: {
      API_URL: '',
      BASE_URL: '',
    },
  };
  
  export const env_var = env[process.env.NODE_ENV];
  