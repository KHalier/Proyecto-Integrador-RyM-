import Card from "../Card/Card";
import styles from "./Cards.module.css"
export default function Cards(props) {

   const { characters , onClose} = props;
   let tarjetas=characters.map(character=><Card
      key={character.id}
      id={character.id}
      name={character.name}
      species={character.species}
      gender={character.gender}
      image={character.image}
      onClose={onClose}
   />)
   return <div className={styles.divCards}>
      {tarjetas}
   </div>;
}
