const fs = require("fs");

console.log("First Line");

fs.readFile("./files/f1.txt", cb1);

function cb1(err, data) {
  if (err) {
    console.log(err);
  }
  console.log("File 1 data is - > ", data.toString());
  fs.readFile("./files/f2.txt", cb2);
}



function cb2(err, data) {
  if (err) {
    console.log(err);
  }
  console.log("File 2 data is - > ", data.toString());
  fs.readFile("./files/f3.txt", cb3);
}



function cb3(err, data) {
  if (err) {
    console.log(err);
  }
  console.log("File 3 data is - > ", data.toString());
}

console.log("Last Line");
