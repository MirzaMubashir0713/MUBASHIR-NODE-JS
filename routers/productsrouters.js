const express=require("express");
const getall=require("./../Controller/productctrl");
const router=express.Router();

router.get("/products",getall);

module.exports=router;