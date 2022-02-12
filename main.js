class Animal {
    constructor(){
        this.alive = true 
    }

    come(){
        console.log("Este animal esta comiendo");
    }
}

class Raton extends Animal {
    corre(){
        console.log('corre');
    }
}



const raton = new Raton()
raton.come()
raton.corre()