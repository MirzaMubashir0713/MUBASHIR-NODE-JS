const express=require("express");
const productctrl=require("./../Controller/productctrl");
const router=express.Router();

router.get("/",productctrl.getall);
router.get("/:id",productctrl.getById);
router.delete("/:id",productctrl.remove);
router.post("/",productctrl.create);
router.put("/:id",productctrl.update);
router.patch("/:id",productctrl.patch);

module.exports=router;