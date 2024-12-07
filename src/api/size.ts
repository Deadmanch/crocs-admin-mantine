import { ApiInstance } from './instance';
import {
  ISize,
  ISizeCreateRequest,
  ISizeResponse,
  ISizeUpdateRequest,
} from './interfaces/size.interface';
import { ApiRoutes } from './routes';

export const sizeCreate = (data: ISizeCreateRequest) => {
  return ApiInstance.post<ISize>(`${ApiRoutes.SIZE}/create`, data);
};

export const sizeUpdate = (id: number, data: ISizeUpdateRequest) => {
  return ApiInstance.patch<ISize>(`${ApiRoutes.SIZE}/${id}`, data);
};

export const sizeDelete = (id: number) => {
  return ApiInstance.delete<ISize>(`${ApiRoutes.SIZE}/${id}`);
};

export const getSizeById = (id: number) => {
  return ApiInstance.get<ISize>(`${ApiRoutes.SIZE}/${id}`);
};

export const getSizes = (page: number, limit: number) => {
  return ApiInstance.get<ISizeResponse>(ApiRoutes.SIZE, { params: { page, limit } });
};
