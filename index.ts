// Parámetros en funciones: Opcionales.

function hola(nombre?: string){
    if (nombre) {
        console.log(nombre);            
    } else {
        console.log("Hola desconocido");
        
    }
}

// Esta vez si no le defino ningún parámetro no da error, porque es opcional.
hola();

hola('Juan')
