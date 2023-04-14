import React, { useState } from "react";
import styles from './Form.module.css'
import Validations from "./Validation";

let {container, warning, pError}=styles;


export default function Form(props){
    const [userData, setUserData]=useState({userName:"", password:""});
    const [errors, setErrors]=useState({userName:"", password:""})

    const handleInputChange=(e)=>{
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        })
        setErrors(
            Validations({
                ...userData,
                [e.target.name]: e.target.value,
            })
        )
    }
    const handleSubmit=(e)=>{
        e.preventDefault();//previene que recargue la pagina, no realiza su comportamiento normal
        props.login(userData);
    }

    return (
        <div className={container}>
            <form onSubmit={handleSubmit}>
                <div>
                <label>
                Username:
                    <input
                    type="text"
                    name="userName"
                    value={userData.userName}
                    onChange={handleInputChange}
                    className={errors.userName && warning}
                    />
                <p className={pError}>{errors.userName && errors.userName}</p>
                </label>    
                </div>
                <div>
                <label >
                Password: 
                <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleInputChange}
                    className={errors.password && warning}
                    />
                    <p className={pError}>{errors.password && errors.password}</p>
                </label>    
                </div>
                <button>login</button>
            </form>
        </div>
    )
}