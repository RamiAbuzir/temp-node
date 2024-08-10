const { log } = require('console');
const {readFile, writeFile}=require('fs')
console.log('start');

readFile('./Content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }

    const first=result
    readFile('./Content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
       const second =result

       writeFile('./Content/result-async',`here is the results : ${first},${second}`,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('done with this task');
       })
    })
}) 
console.log('starting next task');
