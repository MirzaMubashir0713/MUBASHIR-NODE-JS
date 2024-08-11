const express=require("express");
const mongoose=require("mongoose");
const homerouters=require("./routers/homerouters");
const productsrouters=require("./routers/productsrouters");
const app=express();

mongoose.connect("mongodb://localhost:27017/Mubashir-Mongodb")
        .then(()=>console.log("db connected successfully"))
        .catch(err=>console.error(err));

const port = 3000;
app.listen(port,()=>console.log("server is running on the port 3000"));

app.use(express.json());//using this server can parse the information 

app.use("/",homerouters);
app.use("/api/v1/products",productsrouters);
