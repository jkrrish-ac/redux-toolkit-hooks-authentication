const env = {
  development: {
    API_URL: '',
    BASE_URL: '',
    USER_NAME: 'j.krrishchandran@gmail.com',
    PASSWORD: 'samplereact'
  },
  production: {
    API_URL: '',
    BASE_URL: '',
    USER_NAME: 'j.krrishchandran@gmail.com',
    PASSWORD: 'samplereact'
  },
  test: {
    API_URL: '',
    BASE_URL: '',
    USER_NAME: 'j.krrishchandran@gmail.com',
    PASSWORD: 'samplereact'
  },
};

export const env_var = env[process.env.NODE_ENV];
