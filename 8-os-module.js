const os =require('os')

// info about current user 
const user =os.userInfo()
console.log(user);


// method returns the system uptime in seconds 
console.log(`system uptime in seconds is ${os.uptime}`);

const currentOS={
   name:os.type(),
   release:os.release(),
   totalMem:os.totalmem(),
   freemem:os.freemem(),
   
}
console.log(currentOS);