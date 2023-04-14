//const {DELETE_FAVORITE, ADD_FAVORITE}=  require('../actions/actionsType')
import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions/actionsType";
const initialState={
    myFavorite:[],

}
//debe ser mismo nombre que en store
export const rootReduce = (state = initialState, actions)=>{
    const {type,payLoad}= actions;
    switch(type){
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorite:[
                    ...state.myFavorite,//crea una copia de lo que tiene y agrega el favorito traido por payload
                    payLoad
                ]
            }

        case DELETE_FAVORITE:
            return{
                ...state,
                myFavorite : state.myFavorite.filter((el)=> el.id !== +payLoad)//filter ya devuelve un arreglo por lo que no es necesario crear uno como en ADD
            //el + del filter en el payload lo convierte en un numero 
            }

        default:
            //guarda el objeto en nueva memooria lo que provoca que se renderice o chekeé
            return {...state}
    }

}
