import { FavoritesState } from "@/types/favorite";
import create  from "zustand";
import {  persist } from "zustand/middleware";

export const useFavoritesStore = create<FavoritesState>(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (id) => {
        const { favorites } = get();
        if (favorites.includes(id)) {
          set({ favorites: favorites.filter((favId) => favId !== id) });
        } else {
          set({ favorites: [...favorites, id] });
        }
      },
    }),
    {
      name: "favorites-storage",
    }
  )
);
