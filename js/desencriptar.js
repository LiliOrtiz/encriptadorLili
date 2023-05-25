const botonDesencriptador = document.querySelector(".btn-desencriptar");
let textoDecodificado;

botonDesencriptador.addEventListener("click",desencriptarTexto);


function desencriptarTexto(){   

    let texto3 =  textoCodificado; 
    let textoDecodificado ="";    

    for(var i=0; i<texto3.length; i++){
        if(texto3[i] == "a"){
            textoDecodificado = textoDecodificado + "a";
            i = i+1;
        }
        else if(texto3[i] == "e"){
            textoDecodificado = textoDecodificado + "e";
            i = i+4;
        }
        else if(texto3[i] == "i"){
            textoDecodificado = textoDecodificado + "i";
            i = i+3;
        }
        else if(texto3[i] == "o"){
            textoDecodificado = textoDecodificado + "o";
            i = i+3;
        }
        else if(texto3[i] == "u"){
            textoDecodificado = textoDecodificado + "u";
            i = i+3;
        }
        else{
            textoDecodificado = textoDecodificado + texto3[i];
        }
    }

    Swal.fire({
        title: 'Texto Desencriptado',
        icon: 'success',
        confirmButtonText: 'OK'
      })        

    document.getElementById("tituloTextoCod").innerHTML = "Texto Desencriptado";
    parrafo.textContent = textoDecodificado;

    return finalTexto;
}

