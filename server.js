const express = require("express");
var bodyParser = require('body-parser');
const app = express();
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
//app.use(express.bodyParser());

app.get("/", (req, res) => {
    res.render("home");
    next();
});

app.get("/style", (req, res) => {
    res.render("stylepage");
});
// app.get("/mydata",(req,res)=>{
//     res.status(200).json({name:"dddd"});
// }) console.log();
app.post("/mydata",(req,res)=>{ 
    res.status(200).json("dpp");
    console.log(req.body);
})

app.listen(3000, () => {
    console.log(`server is running port 3000`);
})
