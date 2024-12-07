import { ApiInstance } from './instance';
import {
  ICategory,
  ICategoryCreateRequest,
  ICategoryResponse,
  ICategoryUpdateRequest,
} from './interfaces/category.interface';
import { ApiRoutes } from './routes';

export const createCategory = (data: ICategoryCreateRequest) => {
  return ApiInstance.post(`${ApiRoutes.CATEGORY}/create`, data);
};

export const updateCategory = (id: number, data: ICategoryUpdateRequest) => {
  return ApiInstance.patch(`${ApiRoutes.CATEGORY}/${id}`, data);
};

export const deleteCategory = (id: number) => {
  return ApiInstance.delete(`${ApiRoutes.CATEGORY}/${id}`);
};

export const getCategories = (page: number, limit: number) => {
  return ApiInstance.get<ICategoryResponse>(ApiRoutes.CATEGORY, { params: { page, limit } });
};

export const getCategoryById = (id: number) => {
  return ApiInstance.get<ICategory>(`${ApiRoutes.CATEGORY}/${id}`);
};
