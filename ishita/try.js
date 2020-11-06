let express =require("express");
let server=express();
let path=require("path");

server.get("/home",(req, res)=>{
	res.sendFile(path.join(__dirname,"19BIT0328.html"))
});
server.get("/form1",(req, res)=>{
	res.sendFile(path.join(__dirname,"19BIT0328_form1.html"))
});
server.get("/form1/form11",(req, res)=>{
	res.sendFile(path.join(__dirname,"19BIT0328_form11.html"))
});
server.get("/form2",(req, res)=>{
	res.sendFile(path.join(__dirname,"19BIT0328_form2.html"))
});
server.listen(8080);
console.log("Server is ready");