import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import ROUTES from "../Rutas/routes.helper";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/actions/actions";
import { useState, useEffect } from "react";

export default function Card({id, name, species, gender, image, onClose}) {
   const dispach= useDispatch();//se usa para enviar acciones al redux
   const favorites=useSelector((state)=> state.myFavorite)//acceso directo al estado global(en reducer)
   const [isFav, setIsFav]=useState(false)

   //este useEffect reppinta los favoritos al navegar aa  otra pagina de la app
   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [favorites]);


   function eliminacion(){
      onClose(id)
   }
//empaquetado de character para add a favoritos 
   let char={
      name:name,
      gender:gender,
      species:species,
      id:id,
      image:image,
   }

   const handleFavorite= ()=>{
      if(isFav){
         setIsFav(false)
         dispach(deleteFavorite(id)) 
      } else{
         setIsFav(true)
         dispach(addFavorite(char))
      }
   }

   return (
      <div className={styles.divCard}>
         <button className={styles.btnCard} onClick={eliminacion}>X</button>
         {
            isFav ? (
            <button className={styles.btnFav} onClick={handleFavorite}>❤️</button>
            ) : (
            <button className={styles.btnFav} onClick={handleFavorite}>🤍</button>
            )
         }
         <div className={styles.h2Text}>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2> 
         </div>
         <Link to={ROUTES.DETAIL+id}>
         <img className={styles.imgCard} src={image} alt=""></img>
         </Link>
      </div>
   );
}


//en componentes de funcion se usa el hoock usedispach
//en componentes de clase se usa la funcion mapDispachToProps

// export function mapDispachToProps(dispach){
//    return{
//       addFavorite:function (fav){
//          dispach(addFavorite(fav));
//       },
//       deleteFavorite:function (id){
//          dispach(deleteFavorite(id));
//       }
//    }

// }
//luego de declararlo se debe conectar  con connect traido de reac-redux

// export default connect(mapStateToProps, mapDispachToProps)(Card);---->se exporta el connect no la clase Card, conect genera una copia del componente con las funciones incluidas en el mismo


//mapStateToProps trae un link directo del estado
// export function mapStateToProps(state){
//    return{
//       myFavorite: state.myFavorite,
//    }
// }