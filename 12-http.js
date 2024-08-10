const http = require('http');

const server= http.createServer((req,res)=>{
   if(req.url === '/'){
       res.end('welcome to our home page')
   }

   if(req.url === '/about'){
       res.end('this is about page')
   }

   res.end(`
       <h1>oops</h1>
       <p>wE CANT seem to find the page</p>
       <a href="/">Go to home</a>`)
   
   
})
server.listen(5000)