// Definimos una interfaz
interface ClockInterface {
    currentTime: Date;
    getTime(): Date;
  }
   

  // Definimos una clase y con la sintaxis "implements" nos deñimos a la definición de la interfaz
  class Clock implements ClockInterface {
    currentTime: Date = new Date();
    constructor(h: number, m: number) {}

    getTime(): Date {
        return this.currentTime
    }
  }