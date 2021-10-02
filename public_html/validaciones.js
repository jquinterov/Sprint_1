//ORIGINAL
function validar_nombre_usuario(string)
{
    var expresion="^[a-zA-Z]{6,30}$";
    return string.match(expresion)!=null;
}
  
//PRUEBA
function validar_nombre_usuario2()
{
  var usuario = document.getElementById("in_nombre_usuario"); //asi se llama el id
  var expresion="^[a-zA-Z]{6,30}$";
  expresion.test(usuario);
  //return true;
  alert ('cumple');
 
    
    return string.match(expresion)!=null;
  }
  
    
} 

function validar_nombre_usuario3(){
    var regex = /^[a-zA-Z]{6,30}$/;
    var usuario = document.getElementById("in_nombre_usuario").value;
    var answer = regex.test(usuario);
    alert(answer);
    return answer;
}



function validar_contrasena(string)
{
  var expresion="^[a-zA-Z0-9]{6,}$";
  return string.match(expresion)!=null;
}

function confirmar_contrasena(stringA,stringB)
{
	return stringA==stringB;  
}

// PRUEBAS MIAS
function imprimir(){
    alert ('hola mundo');
}

function validar(){
    var usuario = document.getElementById("in_nombre_usuario"); //asi se llama el id
    var form = document.form_registrarse; //funciona con el nombre no con el id
    if(usuario.value.length ===0){
        alert ('formulario vacio');
        return true;
    }
}

function validar2(){
    var expresion="^[a-zA-Z]{6,30}$";
    return string.match(expresion)!=null;    
}

module.exports.validar_nombre_usuario=validar_nombre_usuario;
module.exports.validar_contrasena=validar_contrasena;
module.exports.confirmar_contrasena=confirmar_contrasena;
//PRUEBAS
module.exports.imprimir=imprimir;
module.exports.validar=validar;
module.exports.validar2=validar2;
module.exports.validar_nombre_usuario2=validar_nombre_usuario2;