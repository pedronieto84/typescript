export default class User {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    logName(){
        console.log(this.name);
    }
};

export function  logHola() {
    console.log('hola')
};