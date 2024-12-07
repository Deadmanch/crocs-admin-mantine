export interface IColorCreateRequest {
  title: string;
  inStock: boolean;
  images: File[];
}

export interface IColorUpdateRequest {
  title?: string;
  inStock?: boolean;
  images?: File[];
}

export interface IColor {
  id: number;
  title: string;
  inStock: boolean;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export interface IColorResponse {
  total: number;
  colors: IColor[];
}
