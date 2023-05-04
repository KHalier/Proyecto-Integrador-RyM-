import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import { useState, useEffect} from 'react'
import { Routes, Route, useLocation , useNavigate} from 'react-router-dom'
import About from './components/About/About'
import ROUTES from './components/Rutas/routes.helper'
import Detail from './components/Detail/Detail'
import Form from './components/Forms/Form'
import  Favorites  from './components/Favoritos/Favoritos'

function App () {
 //MOCK DATA
 const userData="a@gmail.com";
 const password="aaa123";

let [characters,setCharacters]=useState([])
const [access, setAccess]=useState(false)
const location= useLocation();
const navigate=useNavigate()

function onClose(id){
  let newCaracters= characters.filter((character)=>character.id!==id)
  setCharacters([])
  setCharacters([...newCaracters])

}

function onSearch(id){
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) =>{ 
      if(data.name) {
        let condicion=false;
        characters.forEach(char=>{if(char.id===data.id)return condicion=true})
        if(condicion===false){
        setCharacters((oldChars) => [...oldChars, data]);  
        }else{
          window.alert("Este personaje ya se encuentra");
        }
        
      } else{
        window.alert("No Hay personaje con ese ID");
      }
      });

}
const logout= ()=>{
  setAccess(false)
  navigate("/");
}
const login= (props)=>{
  if(userData!=props.userName)return alert("username invalido")
  else{
    if(password!=props.password)return alert("password invalido")
    else{
      setAccess(true)
      navigate("/home");
    }
  }
}
//el use efect impide que se navegue por la app hasta que se ingrese un user correcto y se valide
useEffect(() => {
  !access && navigate('/');
}, [access]);

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname !== '/' &&  <Nav onSearch={onSearch}/>}
      <Routes>
        <Route path={ROUTES.FORM} element={<Form login={login}/>}/>
        <Route path={ROUTES.HOME} element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path={ROUTES.ABOUT} element={<About/>}/>
        <Route path={ROUTES.FAVORITES} element={<Favorites/>}/>
        <Route path={ROUTES.DETAIL+':detailid'} element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App