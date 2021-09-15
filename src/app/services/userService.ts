import { get } from './apiService';
import { env_var } from '../../config/env';

export const getUserList = async function () {
  return await get(`${env_var.BASE_URL}users`);
};