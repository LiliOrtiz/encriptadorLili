const botonEncriptador = document.querySelector(".btn-encriptar");

let texto = document.querySelector(".contenedor__uno__text-area");   //TOMO LO INGRESADO POR EL USER    
let parrafo = document.querySelector(".textoEncriptado"); 
let textoCodificado;

//RECUPERAR TEXTO
botonEncriptador.addEventListener("click", encriptarTexto);

//la funcion primero verificará que el user haya puesto texto...
//en caso afirmativo se procederá a encriptar dicho texto
function encriptarTexto(){ 

    if (texto.value == ""){  

        //LLAMANDO A LA VENTANA EMERGENTE CON ESTILO SI NO DETECTA NADA ESCRITO      
        Swal.fire({
            title: 'Texto vacio',
            text: 'Tienes que escribir algo...',
            icon: 'error',
            confirmButtonText: 'OK'
          })   
               
    } else{  
        encriptando();                            
    }
    
}

function mostrarTituloParrafo(){
    const titulo = document.getElementById("tituloTextoCod").style.display ="block";
    const textoEncriptado = document.getElementById("textoEncriptado").style.display = "block";
    const botonCopiar = document.getElementById("btn-copiar").style.display = "block";
}

function ocultarTituloParrafo(){
    const titulo = document.getElementById("tituloTextoCod").style.display ="none";
    const textoEncriptado = document.getElementById("textoEncriptado").style.display = "none";
    const botonCopiar = document.getElementById("btn-copiar").style.display = "none";
    
}

function ocultarDoll(){
    const doll = document.getElementById("doll").style.display = "none";
    const h2Texto = document.getElementById("h2Texto").style.display = "none";
}

function mostrarDoll(){
    const doll = document.getElementById("doll").style.display = "inline-block";
    const h2Texto = document.getElementById("h2Texto").style.display = "inline-block";
}

// La funcion verificará que el texto del USER sea el solicitado sin errores..
function encriptando(){

    let texto2 = texto.value; //VARIABLE QUE TOMA EL TEXTO DEL "TEXT AREA" PARA PODER RECORRERLO
    textoCodificado = ""; //EN ESTA VARIABLE GUARDAREMOS EL TEXTO CODIFICADO
    

    for(var i=0; i < texto2.length; i++){
        if(((texto2[i] < 'a') || (texto2[i] > 'z')) && (texto2[i] != ' ')){ 
            //detectamos que no haya caracteres especiales
            Swal.fire('No puedes usar mayúsculas, números o carácteres especiales');
            let textoSeleccionado = document.querySelector(".contenedor__uno__text-area").value ="";          
           return;
        }
        else{ //  NO HABIENDO ERRORES SE PROCEDE A ENCRIPTAR
            ocultarDoll()
            mostrarTituloParrafo();  

            for(var i=0; i<texto2.length; i++){
                if(texto2[i] == "a"){
                    textoCodificado = textoCodificado + "ai";
                }
                else if(texto2[i] == "e"){
                    textoCodificado = textoCodificado + "enter";
                }
                else if(texto2[i] == "i"){
                    textoCodificado = textoCodificado + "imes";
                }
                else if(texto2[i] == "o"){
                    textoCodificado = textoCodificado + "ober";
                }
                else if(texto2[i] == "u"){
                    textoCodificado = textoCodificado + "ufat";
                }
                else{
                    textoCodificado = textoCodificado + texto2[i];
                }
            } 
            Swal.fire({
                title: 'Texto encriptado',                           
                icon: 'success',
                confirmButtonText: 'OK'
              })             
              
              parrafo.textContent = textoCodificado; //muestro contenido
        }
    }
    return textoCodificado;    
}

