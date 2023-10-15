const path=require('path');

const extName=path.extname('E:\\Node Js Scaler Course\\Node_Modules\\f1.txt');

console.log(extName);

const baseName=path.basename('E:\\Node Js Scaler Course\\Node_Modules\\f1.txt');
console.log(baseName);

console.log("current file path", __filename);
console.log("current directory name is ", __dirname);