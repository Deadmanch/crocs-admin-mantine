import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { getCategories } from '@/api/category';

interface ICategory {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface CategoryState {
  categories: ICategory[];
  total: number;
  currentPage: number;
  setPage: (page: number) => void;
  fetchCategories: (page: number, limit: number) => void;
}

export const useCategoryStore = create<CategoryState>()(
  devtools(
    persist(
      (set) => ({
        categories: [],
        total: 0,
        currentPage: 1,
        setPage: (page: number) => set({ currentPage: page }),
        fetchCategories: async (page: number, limit: number) => {
          const response = await getCategories(page, limit);
          if (response?.data) {
            const { total, categories } = response.data;
            const filteredCategories = categories.map(({ id, name, createdAt, updatedAt }) => ({
              id,
              name,
              createdAt,
              updatedAt,
            }));
            set({ categories: filteredCategories, total });
          }
        },
      }),
      {
        name: 'category-storage',
      }
    )
  )
);
