import { IColor } from './color.interface';
import { ISize } from './size.interface';

export interface ICreateProductRequest {
  title: string;
  slug: string;
  images: File[];
  metaTitle?: string;
  metaDesc?: string;
  seoText?: string;
  originalPrice: number;
  discountedPrice?: number;
  tags?: string[];
  categoryId: number;
  sizeIds: number[];
  colorIds: number[];
}

export interface IProductUpdateRequest {
  title?: string;
  slug?: string;
  images?: File[];
  metaTitle?: string;
  metaDesc?: string;
  seoText?: string;
  originalPrice?: number;
  discountedPrice?: number;
  tags?: string[];
  categoryId?: number;
  sizeIds?: number[];
  colorIds?: number[];
}

export interface IProduct {
  id: number;
  title: string;
  slug: string;
  images: string[];
  metaTitle?: string;
  metaDesc?: string;
  seoText?: string;
  price: number;
  discountedPrice: number;
  tags?: string[];
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  colors: IColor[];
  sizes: ISize[];
}

export interface IProductResponse {
  total: number;
  products: IProduct[];
}
