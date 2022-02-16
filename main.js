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

// Cambiando el true por false vemos un error y cómo entra dentro del catch
promiseEjemplo(true)
.then((res)=>{
  console.log('primer then');
    console.log(res);
    return true
})
.then((resultFromPreviuous) => {
  console.log('segundo then');
  console.log(resultFromPreviuous);
  return {a:1}
})
.catch((err)=>{
  console.log('error', err);
})
.finally(()=>{
  console.log('finally');
})
