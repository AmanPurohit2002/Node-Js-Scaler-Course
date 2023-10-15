const fs=require('fs');

/*

//---------------files---------------------

//1. reading file

let file1Content=fs.readFileSync('./files/f1.txt');
console.log(file1Content.toString());

// 2. writing file
fs.writeFileSync('./files/f2.txt','This is done by Aman');
let file2Content=fs.readFileSync('./files/f2.txt');
console.log(file2Content.toString());


// 3. append file

fs.appendFileSync('./files/f3.txt',' This is appended by Aman');
let file3Content=fs.readFileSync('./files/f3.txt');
console.log(file3Content.toString());

// 4. delete a file

fs.unlinkSync('./files/f2.txt');

*/

//---------------directories---------------------

//1. create a directory

// fs.mkdirSync('myDirectory');

//2. check the content inside the directory

const folderPath='E:\\Node Js Scaler Course\\Node_Modules\\myDirectory';

let folderContent=fs.readdirSync(folderPath);

console.log(folderContent);

// 3. check whether a directory/file exists or not

const doesExist=fs.existsSync('myDirectory');

console.log(doesExist);

// 4. remove the directory

fs.rmdirSync('testToDelete');

// fs.mkdirSync('testToDelete');



