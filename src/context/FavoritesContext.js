import React from "react";

const FavoritesContext = React.createContext({
    favoritePokemon: [],
    updateFavoritePokemon: (id) => null
});

export const FavoritesProvider = FavoritesContext.Provider;

export default FavoritesContext;