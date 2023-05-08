export default function Validations(input){
const errors={};
const regexEmail= /^[A-Z0-9._%+-]+@[A-Z0-0.-]+\.[A-Z]{2,4}$/i;
const regexPassword= /^(?=\w*\d)\S{6,10}$/;
const regexnumber= /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i;

if(!regexEmail.test(input.userName)){
    errors.userName="La direccion no corresponde a un correo electronico"
}
if(!input.userName){
    errors.userName="El correo no puede estar vacio";
}
if(input.userName.length>35){
    errors.userName="No puede tener mas de 35 caracteres";
}
if(!regexnumber.test(input.password)){
    errors.password="La contraseña debe tener un numero"
}
if(!regexPassword.test(input.password)){
    errors.password="La contraseña debe tener entre 6 y 10 caracteres"
}
return errors;
}