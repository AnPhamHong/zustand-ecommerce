export interface FavoritesState {
    favorites: string[];
    toggleFavorite: (id: string) => void;
}
