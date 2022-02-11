// Parámetros en funciones: Por defecto.

function hola(nombre = "Desconocido"){
    if (nombre) {
        console.log(nombre);            
    } else {
        console.log(nombre);
        
    }
}

// Esta vez si no le defino ningún parámetro cogerá el que he definido por defecto.
hola();

hola('Juan')
