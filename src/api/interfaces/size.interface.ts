export interface ISizeCreateRequest {
  title: string;
  inStock: boolean;
}

export interface ISizeUpdateRequest {
  title?: string;
  inStock?: boolean;
}

export interface ISize {
  id: number;
  title: string;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ISizeResponse {
  total: number;
  sizes: ISize[];
}
