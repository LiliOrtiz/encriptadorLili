const borrar = document.getElementById("borrar");

borrar.addEventListener("click",borrarTextoArea);

function borrarTextoArea(){    
    let textoSeleccionado = document.querySelector(".contenedor__uno__text-area");

    if(textoSeleccionado.value== ""){

    }else{
        textoSeleccionado.value = "";
        Swal.fire('Texto borrado exitosamente.');
        ocultarTituloParrafo();
        mostrarDoll();
    }    

}