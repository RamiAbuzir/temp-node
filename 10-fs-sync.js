const {readFileSync, writeFileSync}=require('fs')
console.log('start');

const first =readFileSync('./Content/first.txt','utf8')
const second =readFileSync('./Content/second.txt','utf8')


writeFileSync('./Content/result-sync.txt',`here is the result ${first}, ${second}`,{flag:'a'})

console.log('done with the task');
console.log('starting the next one');

