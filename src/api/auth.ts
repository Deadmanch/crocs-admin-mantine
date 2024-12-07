import { ApiInstance } from './instance';
import { ILoginRequest, IRegisterRequest } from './interfaces/auth.interface';
import { ApiRoutes } from './routes';

export const registerUser = (data: IRegisterRequest) => {
  return ApiInstance.post(`${ApiRoutes.AUTH}/register`, data);
};

export const login = (data: ILoginRequest) => {
  return ApiInstance.post(`${ApiRoutes.AUTH}/login`, data);
};
