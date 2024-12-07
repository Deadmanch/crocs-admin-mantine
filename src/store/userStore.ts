import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface IUser {
  id: number;
  email: string;
}

interface IUserState {
  user: IUser | null;
  accessToken: string | null;
  setUser: (user: IUser | null, accessToken: string) => void;
  clearUser: () => void;
}

export const useUserStore = create<IUserState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        accessToken: null,
        setUser: (user: IUser | null, accessToken: string) => set({ user, accessToken }),
        clearUser: () => set({ user: null, accessToken: null }),
      }),
      {
        name: 'user-storage',
      }
    )
  )
);
