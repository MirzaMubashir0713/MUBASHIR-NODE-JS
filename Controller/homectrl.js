function root(req,res){
    res.status(200);
    res.send("hello express js");
};

function health(req,res){
    res.status(200);
    res.json({status:"up"});
};
// exporting
module.exports={
    root:root,
    health:health
};