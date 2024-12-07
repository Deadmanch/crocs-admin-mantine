import { ApiInstance } from './instance';
import {
  ICreateProductRequest,
  IProduct,
  IProductResponse,
  IProductUpdateRequest,
} from './interfaces/product.interface';
import { ApiRoutes } from './routes';

export const createProduct = (data: ICreateProductRequest) => {
  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('slug', data.slug);
  formData.append('originalPrice', String(data.originalPrice));
  formData.append('categoryId', String(data.categoryId));

  if (data.metaTitle) {
    formData.append('metaTitle', data.metaTitle);
  }
  if (data.metaDesc) {
    formData.append('metaDesc', data.metaDesc);
  }
  if (data.seoText) {
    formData.append('seoText', data.seoText);
  }
  if (data.discountedPrice !== undefined) {
    formData.append('discountedPrice', String(data.discountedPrice));
  }

  data.images.forEach((image) => formData.append('images', image));
  data.sizeIds.forEach((sizeId) => formData.append('sizeIds', String(sizeId)));
  data.colorIds.forEach((colorId) => formData.append('colorIds', String(colorId)));

  if (data.tags) {
    data.tags.forEach((tag) => formData.append('tags', tag));
  }

  return ApiInstance.post(`${ApiRoutes.PRODUCT}/create`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const updateProduct = (id: number, data: IProductUpdateRequest) => {
  const formData = new FormData();

  if (data.title !== undefined) {
    formData.append('title', data.title);
  }
  if (data.slug !== undefined) {
    formData.append('slug', data.slug);
  }
  if (data.originalPrice !== undefined) {
    formData.append('originalPrice', String(data.originalPrice));
  }
  if (data.categoryId !== undefined) {
    formData.append('categoryId', String(data.categoryId));
  }
  if (data.metaTitle !== undefined) {
    formData.append('metaTitle', data.metaTitle);
  }
  if (data.metaDesc !== undefined) {
    formData.append('metaDesc', data.metaDesc);
  }
  if (data.seoText !== undefined) {
    formData.append('seoText', data.seoText);
  }
  if (data.discountedPrice !== undefined) {
    formData.append('discountedPrice', String(data.discountedPrice));
  }

  if (data.images) {
    data.images.forEach((image) => formData.append('images', image));
  }
  if (data.sizeIds) {
    data.sizeIds.forEach((sizeId) => formData.append('sizeIds', String(sizeId)));
  }
  if (data.colorIds) {
    data.colorIds.forEach((colorId) => formData.append('colorIds', String(colorId)));
  }
  if (data.tags) {
    data.tags.forEach((tag) => formData.append('tags', tag));
  }

  return ApiInstance.patch(`${ApiRoutes.PRODUCT}/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const deleteProduct = (id: number) => {
  return ApiInstance.delete(`${ApiRoutes.PRODUCT}/${id}`);
};

export const getProductById = (id: number) => {
  return ApiInstance.get<IProduct>(`${ApiRoutes.PRODUCT}/${id}`);
};

export const getProducts = (page: number, limit: number) => {
  return ApiInstance.get<IProductResponse>(ApiRoutes.PRODUCT, { params: { page, limit } });
};
