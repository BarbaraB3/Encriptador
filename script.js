var botonEncriptar= document.querySelector(".encriptar");
var botonDesencriptar= document.querySelector(".desencriptar");
var imagen= document.querySelector(".contenedorImagen");
var contenedor= document.querySelector(".contenedor");
var textoResultado= document.querySelector(".texto_resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

const botonCopiar = document.querySelector(".boton_copiar");
botonCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto_resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
})
var cajaMensaje = document.querySelector(".contenedordos__resultado");


cajaMensaje.classList.add("ocultar");
botonCopiar.classList.add("ocultar");

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    textoResultado.textContent = encriptarTexto(cajatexto);
    
    
}
function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    textoResultado.textContent = desencriptarTexto(cajatexto);
    
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value
}

function ocultarAdelante(){
    imagen.classList.add("ocultar");
    contenedor.classList.add("ocultar");
    
 
}
function mostrarMensaje(){
    imagen.classList.remove("ocultar");
    contenedor.classList.remove("ocultar");
}
function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";
    if (texto.length == 0){
        mostrarMensaje()
        botonCopiar.classList.add("ocultar");
        cajaMensaje.classList.add("ocultar");
    };

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    cajaMensaje.classList.remove("ocultar");
    botonCopiar.classList.remove("ocultar");
    return textoFinal;

    
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";
    if (texto.length == 0){
        mostrarMensaje()
        botonCopiar.classList.add("ocultar");
        cajaMensaje.classList.add("ocultar");
    };
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }
    cajaMensaje.classList.remove("ocultar");
    botonCopiar.classList.remove("ocultar");
    return textoFinal;

    
}

