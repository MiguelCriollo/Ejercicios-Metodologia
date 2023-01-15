const user="migue";
const password="1234";
let ingreso=prompt("Ingrese su usuario");
if(ingreso==user){
    alert("Usuario Valido");
    ingreso=prompt("Ingrese su contraseña");
    if(ingreso==password){
        alert("Bienvenido");
    }else{
        alert("Contraseña incorrect");
    }
}else{
    alert("Usuario incorrecto");
}
