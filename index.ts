
// Estos no necesitan explicación
let nombre: string;
let number: number;
let boleano: boolean;

// Los arrays se definen así, primero se dice de que van a ser, acompañados de []
let array: number[];
let cualquiera: any;

// Types son para definir Object Types
type Geoposition = {
    x: string 
    y: string 
}

const getGeopositionX = (coordinates: Geoposition) =>{
    return coordinates.x
}

