
// Las interfaces son estructuras más complejas ( De echo en mis proyectos con estas ya me basta y me sobra).

interface Persona {
    nombre: string
    caracteristicas: CaracteristicasFisicas,
    amigos: Persona[]
}

interface CaracteristicasFisicas {
    altura: number
    edad: number
    sexo: string
}