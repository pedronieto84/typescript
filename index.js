// Parámetros en funciones: Por defecto.
function hola(nombre) {
    if (nombre === void 0) { nombre = "Desconocido"; }
    if (nombre) {
        console.log(nombre);
    }
    else {
        console.log(nombre);
    }
}
// Esta vez si no le defino ningún parámetro no da error, porque es opcional.
hola();
hola('Juan');
