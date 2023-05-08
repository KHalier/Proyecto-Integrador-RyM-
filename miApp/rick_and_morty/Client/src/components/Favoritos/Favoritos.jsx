import { Connect, connect, useSelector } from "react-redux";
import Card from "../Card/Card";
import {orderCards, filterCards} from '../../redux/actions/actions'
import { useDispatch } from "react-redux";
import styles from "./Favoritos.module.css"
const {container, cards}=styles;


//myFavorites se pasaba como props usando el connect comentado mas debajo, pero en este caso usamos el useSelecto por lo que no es necesario
export default function Favorites(){//aqui se pasaba {myFavorites}

    const dispach = useDispatch();
    const favorites = useSelector(state=>state.myFavorite)

    const handleDispach = (e)=>{
        const{name, value}= e.target;

        if(name==="order"){
            return dispach(orderCards(value))
        }
        if(name==="filter"){
            return dispach(filterCards(value))
        }
    }
    return(
        <div className={container}>
            
            <div>
                <select name='order' onChange={handleDispach}>
                    <option value='ascendente'>ASCENDENTE</option>
                    <option value='descendente'>DESCENDENTE</option>
                </select>

                <select name='filter' onChange={handleDispach}>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unknown'>Unknown</option>
                    <option value='x'>All</option>
                </select>
            </div>
            <div className={cards}>
            {favorites?.map(fav=>(<Card
            name={fav.name}
            id={fav.id}
            key={fav.key}
            gender={fav.gender}
            image={fav.image}
            />))}
            </div>


        </div>
    )


}


//Puede ser traido de la siguiente forma o con UseSelector
// export function mapStateToProps(state){
//     return{
//         myFavorite: state.myFavorite
//     }
// }

// export default connect(mapStateToProps, null)(Favorites)