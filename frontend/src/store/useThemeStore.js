import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: "coffee",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "ChatApp-theme", // key in localStorage
    }
  )
);
