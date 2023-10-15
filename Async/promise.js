const promise = new Promise((res, rej) => {
  const a = 4;
  const b = 4;

  setTimeout(() => {
    if (a === b) {
      res("Equal");
    } else {
      rej();
    }
  },2000);
});


promise.then((data)=> console.log("Yeah done it", data)).catch((err)=>console.log(err));



// console.log(promise);