import { ApiInstance } from './instance';
import { IColor, IColorCreateRequest, IColorResponse, IColorUpdateRequest } from './interfaces/color.interface';
import { ApiRoutes } from './routes';

export const createColor = (data: IColorCreateRequest) => {
  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('inStock', JSON.stringify(data.inStock));
  data.images.forEach((image) => formData.append('images', image));

  return ApiInstance.post(`${ApiRoutes.COLOR}/create`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const updateColor = (id: number, data: IColorUpdateRequest) => {
  const formData = new FormData();
  if (data.title !== undefined) {
    formData.append('title', data.title);
  }
  if (data.inStock !== undefined) {
    formData.append('inStock', JSON.stringify(data.inStock));
  }

  if (data.images) {
    data.images.forEach((image) => {
      formData.append('images', image);
    });
  }

  return ApiInstance.patch(`${ApiRoutes.COLOR}/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getColor = (id: number) => {
  return ApiInstance.get<IColor>(`${ApiRoutes.COLOR}/${id}`);
};

export const deleteColor = (id: number) => {
  return ApiInstance.delete(`${ApiRoutes.COLOR}/${id}`);
};

export const getColors = (page: number, limit: number) => {
  return ApiInstance.get<IColorResponse>(ApiRoutes.COLOR, { params: { page, limit } });
};
