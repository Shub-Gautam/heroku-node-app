
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/main.html");
});

const Port = process.env.PORT || 3000 ;

app.listen(Port,function(){
    console.log("Listning to the port 3000");
});

app.post("/",function(req,res){
    var body1 = req.body;
    console.log(body1);
	
});