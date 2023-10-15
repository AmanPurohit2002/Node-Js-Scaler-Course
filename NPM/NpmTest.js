const figlet=require('figlet');


figlet('Aman Purohit',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})