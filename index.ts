interface Persona {
    nombre: string
    caracteristicas?: CaracteristicasFisicas,
    amigos ?: Persona // el interrogante también aquí sirve para identificar que son opcionales
}

interface CaracteristicasFisicas {
    altura: number
    edad: number
    sexo: string | number // por ejemplo, puede ser que 1 sea mujer y 0 sea hombre
}


// Los genericos me sirven para pasarle desde fuera el valor.

// Defino un tipo de función "Si, no lo había mencionado, con typescript también podemos definir tipos de funciones"

function ejemploGenerico <T>(arg: T):T{
    return arg
}

const number = ejemploGenerico<number>(1)

const string = ejemploGenerico<string>('asdf')

const Persona = ejemploGenerico<Persona>({ nombre: 'Juan' })