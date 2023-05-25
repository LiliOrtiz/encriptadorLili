const botonCopiar = document.querySelector('.btn-copiar');
let copia;

botonCopiar.addEventListener("click",copiarTexto);

function copiarTexto(){   
    const textoCopiado = document.querySelector('.textoEncriptado');  
    copia = textoCopiado.textContent;
    navigator.clipboard.writeText(copia);
    
    Swal.fire('Texto copiado al portapapeles');
}