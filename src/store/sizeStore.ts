import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { getSizes } from '@/api/size';

interface ISize {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface SizeState {
  total: number;
  sizes: ISize[];
  currentPage: number;
  setPage: (page: number) => void;
  fetchSizes: (page: number, limit: number) => void;
}

export const useSizeStore = create<SizeState>()(
  devtools(
    persist(
      (set) => ({
        sizes: [],
        total: 0,
        currentPage: 1,
        setPage: (page) => set({ currentPage: page }),
        fetchSizes: async (page: number, limit: number) => {
          const response = await getSizes(page, limit);
          if (response?.data) {
            const { total, sizes } = response.data;
            const filteredSizes = sizes.map(({ id, title, createdAt, updatedAt }) => ({
              id,
              name: title,
              createdAt,
              updatedAt,
            }));
            set({ sizes: filteredSizes, total });
          }
        },
      }),
      {
        name: 'size-storage',
      }
    )
  )
);
