//const {DELETE_FAVORITE, ADD_FAVORITE}=  require('../actions/actionsType')
import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "../actions/actionsType";
const initialState={
    myFavorite:[],
    allCharacters:[]
}

//debe ser mismo nombre que en store
export const rootReduce = (state = initialState, actions)=>{
    const {type,payLoad}= actions;
    switch(type){
        case ADD_FAVORITE:
            return{
                ...state,
                allCharacters:[
                    ...state.allCharacters,//crea una copia de lo que tiene y agrega el favorito traido por payload
                    payLoad
                ],
                myFavorite:[...state.myFavorite, payLoad]
            }

        case DELETE_FAVORITE:
            return{
                ...state,
                myFavorite: state.myFavorite.filter(
                (character) => character.id !== +payLoad
                ),
                allCharacters: state.allCharacters.filter(
                (character) => character.id !== +payLoad
                ),//filter ya devuelve un arreglo por lo que no es necesario crear uno como en ADD
            //el + del filter en el payload lo convierte en un numero 
            }

            case FILTER:
                // const {allCharacters} = state;
                return{
                    ...state,
                    myFavorite : payLoad==="x"? state.allCharacters : state.allCharacters.filter((el)=> el.gender === payLoad)
                }

            // case ORDER:
            // console.log(state.myFavorite)
            // const newCharacters = state.myFavorite.sort((a,b)=>{
                
            //     // if(a.id > b.id){
            //     //     return payLoad ==="ascendente"? console.log(1) : console.log(-1);
            //     // }
            //     // if(a.id < b.id){
            //     //     return payLoad ==="descendente"? console.log(-1) : console.log(1);
            //     // }

            
            // console.log(newCharacters)
            // return{
            //     ...state,
            //     myFavorite : newCharacters
            // }
            // })
            case ORDER:
                
                const { myFavorite } = state;
                console.log(myFavorite);
                const sorted = [...myFavorite].sort((a, b) => {
                if (payLoad === "ascendente") {
                    return a.id - b.id;
                } else {
                    return b.id - a.id;
                }

                });
                console.log(sorted);
                return {
                    ...state,
                    myFavorite: sorted,
                };


        default:
            //guarda el objeto en nueva memooria lo que provoca que se renderice o chekeé
            return {...state}
    }

}
