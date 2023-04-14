import { ADD_FAVORITE, DELETE_FAVORITE } from "./actionsType";


export const addFavorite= function (char){
    return{
        type:ADD_FAVORITE,
        payLoad:char

    }

}

export const deleteFavorite= function (id){
    return{
        type:DELETE_FAVORITE,
        payLoad:id
    }
    
}