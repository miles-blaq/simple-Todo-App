const { GETIndex,
        PostIndex,
        DeleteIndex } = require("../controllers/todo_controller"),
        express = require("express"),
        router = express.Router();

router.get("/",(req,res)=>{
    res.redirect("/todo")
})        
router.get("/todo",GETIndex);        
router.post("/todo",PostIndex);
router.delete("/todo/:item",DeleteIndex);

module.exports = router;
