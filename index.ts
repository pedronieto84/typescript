class Ciudad {
    public nombre: string = 'Almeria'
    private poblacion: number = 197000
    extension: number

    logName(){
        console.log("La ciudad es ", this.nombre);
    }
}


let ciudad = new Ciudad()


ciudad.
