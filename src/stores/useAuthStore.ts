import { create } from "zustand";

interface DemoUserSignin {
  name?: string;
  email: string;
  password?: string;
}

interface AuthState {
  user: DemoUserSignin | null;
  authLoading: boolean;
  demoUserSignin: (data: DemoUserSignin) => void;
  demoUserSignout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  authLoading: false,

  demoUserSignin: (data) => {
    set({ authLoading: true });
    // simulate async login
    setTimeout(() => {
      set({ user: data, authLoading: false });
    }, 500);
  },

  demoUserSignout: () => {
    set({ user: null });
  },
}));
