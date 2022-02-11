// Parámetros en funciones obligatorios

function hola(nombre: string){
    console.log('hola', nombre)
}

// Si no le paso ningún parámetro, me da error.

// Ejemplo de mensaje de error si no le paso nada
hola()


// Ejemplo de mensaje de error si le paso un dato erróneo.
hola(12)


// Si le paso un dato aceptado, me lo acepta.
hola('Juan')