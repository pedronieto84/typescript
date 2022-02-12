const promiseEjemplo = (result, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (result) {
        resolve({ message: "success" });
      } else {
        reject({ message: "error" });
      }
    }, delay);
  });
};

// No importa el orden, ocurren de forma asíncrona y en el then y el catch definimos el callback ( lo que sucederá en cada escenario.)
(async () => {
    try {
        // De esta forma conseguimos hacer que una se ejecute después de la otra

        const primera = await promiseEjemplo(true, 2000)
        console.log('primera', primera);
        const segunda = await promiseEjemplo(true, 1000)
        console.log('segunda', segunda)
    } catch (error) {
        // también simplificamos sintaxis agrupando el error 
        const rej = error;
        console.error('error', rej)
    }
    
})()



