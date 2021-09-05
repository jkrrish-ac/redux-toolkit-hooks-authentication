import { post } from './apiService';
import { getAccessToken } from './localStorage';

export interface AuthPayload {
  email: string;
  password: string;
}

export const authenticate = async (data: AuthPayload) => {
  return await post('/authenticate/login/', data);
};

export const isAuthenticated = (): boolean => {
  return getAccessToken() ? true : false;
};
