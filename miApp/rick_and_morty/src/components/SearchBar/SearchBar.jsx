import React from "react";


export default function SearchBar(props) {
   let [id, setId]= React.useState({})
   function cambiarId(e){
      setId({
         ...id,
         id:e.target.value,
      })
   }
   function button1(){
      props.onSearch(id.id)
   }
   function button2(){
      props.onSearch(Math.floor(Math.random() * 826))
   }
   return (
      <div>
      <input type='search' onChange={cambiarId}/>
      <button onClick={button1} >Agregar</button>
      <button onClick={button2}> Random</button>
      </div>
   );
}