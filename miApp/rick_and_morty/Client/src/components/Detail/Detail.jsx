import React from "react";
import style from "./Detail.module.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ROUTES from "../Rutas/routes.helper";


let {img, container, text}=style;

export default function Detail(){
    
    let {detailid}=useParams()
    const [character, setCharacter]= React.useState()
    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/character/${detailid}`)
        .then((response) => response.json())
        .then((char) => {
            if (char.name) {
            setCharacter(char);
            } else {
            window.alert("No hay personajes con ese ID");
            }
        })
        .catch((err) => {
            window.alert("No hay personajes con ese ID");
        });
        return setCharacter({});
    }, [detailid]);
    
    return <div className={container}>
        {character ? (
        <div >
            <div>
            <img src={character.image} className={img} alt="" />    
            </div>
            <div className={text}>
            <h1 >NOMBRE:{character.name}</h1>
            <h2 >STATUS:{character.status}</h2>
            <h2 >ESPECIE:{character.species}</h2>
            <h2 >GENERO:{character.gender}</h2>
            <h2 >ORIGIN:{character.origin?.name}</h2>   
            </div>
            <Link to={ROUTES.HOME}>
            <button>Back to Home</button>
            </Link>
            
        
        </div>
    ) :(<h1>LOADING...</h1>)
    }
    </div>
}