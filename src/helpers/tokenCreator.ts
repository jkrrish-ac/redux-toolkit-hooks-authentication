import { getAccessToken } from '../app/services/localStorage';
export const getHeaderInfo = async function () {
  let token = await getAccessToken();
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  
};

export const getFormDataHeader = async function () {
  let token = await getAccessToken();
  return {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  };
  
};