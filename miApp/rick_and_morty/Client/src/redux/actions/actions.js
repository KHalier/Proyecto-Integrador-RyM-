import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER} from "./actionsType";


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

export const filterCards = function (gender){
    return{
        type: FILTER,
        payLoad:gender
    }
}

export const orderCards = function (order){
    return{
        type: ORDER,
        payLoad:order
    }
}