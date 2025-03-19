import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface FavoritesState {
  favorites: string[];
  toggleFavorite: (id: string) => void;
}
export const useFavoritesStore = create<FavoritesState>()(
  devtools(
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
  )
);
