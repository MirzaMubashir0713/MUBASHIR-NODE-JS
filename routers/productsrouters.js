const express=require("express");
const productctrl=require("./../Controller/productctrl");
const router=express.Router();

router.get("/",productctrl.getall);
router.get("/:id",productctrl.getById);
router.delete("/:id",productctrl.remove);
router.post("/",productctrl.post);
router.put("/:id",productctrl.Update);
router.patch("/:id",productctrl.Patch);

module.exports=router;