const express=require("express");
const productctrl=require("./../Controller/productctrl");
const router=express.Router();

router.get("/products",productctrl.getall);
router.get("/products/:id",productctrl.getById);
router.delete("/products/:id",productctrl.remove);

module.exports=router;