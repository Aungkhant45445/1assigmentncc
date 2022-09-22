const { appendFile } = require('fs');
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello Mandalay'); //write a response to the client
  res.end(); //end the response
}).listen(5500); //the server object listens on port 5500
 
app.get('/',(req,res)=>{
   res.sendfile(__dirname + "/ak.html");
});