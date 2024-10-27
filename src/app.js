const express = require("express")
const path = require("path")
const app = express();
const port = process.env.PORT || 3000;

const staticPath =path.join(__dirname,"../public")
const templatePath=path.join(__dirname,"../templates/views")
app.use(express.static(staticPath)) 

app.set("view engine","hbs")
app.set("views",templatePath)

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})
app.get("/scheme",(req,res)=>{
    res.render("scheme")
})
app.get("/sign_in",(req,res)=>{
    res.render("sign_in");
})

app.listen(port,()=>{
    console.log(`listening to port : ${port}`)
})