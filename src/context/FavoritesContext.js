import React, {createContext, useState} from "react";

export const CustomFavoritesContext = createContext({});

function FavoritesContext({children}) {

    const [favorite, setFavorite] = useState([]);


    const contextDataFavorite = {
        favoritePokemon: favorite,
        updateFavoritePokemon: setFavorite,
    }


return (
    <>
        <CustomFavoritesContext.Provider value={contextDataFavorite}>
            {children}
        </CustomFavoritesContext.Provider>
    </>
)
        }
export default FavoritesContext;