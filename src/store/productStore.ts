import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { getProducts } from '@/api/product';

interface IProduct {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface ProductState {
  products: IProduct[];
  total: number;
  currentPage: number;
  setPage: (page: number) => void;
  fetchProducts: (page: number, limit: number) => void;
}

export const useProductStore = create<ProductState>()(
  devtools(
    persist(
      (set) => ({
        products: [],
        total: 0,
        currentPage: 1,
        setPage: (page: number) => set({ currentPage: page }),
        fetchProducts: async (page: number, limit: number) => {
          const response = await getProducts(page, limit);
          if (response?.data) {
            const { total, products } = response.data;
            const filteredProducts = products.map(({ id, title, createdAt, updatedAt }) => ({
              id,
              name: title,
              createdAt,
              updatedAt,
            }));
            set({ products: filteredProducts, total });
          }
        },
      }),
      {
        name: 'product-storage',
      }
    )
  )
);
