const express=require("express");
const homerouters=require("./routers/homerouters");
const productsrouters=require("./routers/productsrouters");
const app=express();

const port = 3000;
app.listen(port,()=>console.log("server is running on the port 3000"));

app.use(express.json());

app.use("/",homerouters);
app.use("/api/v1/products",productsrouters);
