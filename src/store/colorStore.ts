import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { getColors } from '@/api/color';

interface IColor {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface ColorState {
  colors: IColor[];
  total: number;
  currentPage: number;
  setPage: (page: number) => void;
  fetchColors: (page: number, limit: number) => void;
}

export const useColorStore = create<ColorState>()(
  devtools(
    persist(
      (set) => ({
        colors: [],
        total: 0,
        currentPage: 1,
        setPage: (page: number) => set({ currentPage: page }),
        fetchColors: async (page: number, limit: number) => {
          const response = await getColors(page, limit);
          if (response?.data) {
            const { total, colors } = response.data;
            const filteredColors = colors.map(({ id, title, createdAt, updatedAt }) => ({
              id,
              name: title, // Преобразуем title в name
              createdAt,
              updatedAt,
            }));
            set({ colors: filteredColors, total });
          }
        },
      }),
      {
        name: 'color-storage',
      }
    )
  )
);
