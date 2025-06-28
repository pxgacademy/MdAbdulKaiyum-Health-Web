import { create } from "zustand";

interface DemoUserSignin {
  name?: string;
  email: string;
  password?: string;
}

interface AuthState {
  user: null | DemoUserSignin;
  authLoading: boolean;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  authLoading: false,

  demoUserSignin: async (data: DemoUserSignin) => {
    set({ user: data });
  },

  demoUserSignout: async () => {
    set({ user: null });
  },
}));
