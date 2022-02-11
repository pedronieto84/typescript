// DESESTRUCTURACIÓN DE OBJETOS
// Sirven para convertir las propiedades de un objeto en variables
var persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Almería"
};
//let {nombre, edad } = persona
// Es cómo hacer
var nombre = persona.nombre;
// let edad = persona.edad
console.log(nombre);
persona.nombre = "Reasignado";
console.log(nombre, persona.nombre);
