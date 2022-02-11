class Ciudad {
    public nombre: string 
    private poblacion: number 
    extension: number


    // EL constructor se llama automaticamente siempre
    // que se instancia la clase.
    constructor(nombre: string, poblacion: number){
        this.nombre = nombre
        this.poblacion = poblacion
    }
}


let ciudad2 = new Ciudad('Almeria', 196000)


console.log(ciudad2);
// Esto loguea {nombre: "Almeria", poblacion: 196000}
