const express = require("express");
const router = express.Router();



//index - users
router.get("/",(req,res)=>{
    res.send("Get for users");
});
//show - users
router.get("/:id",(req,res)=>{
    res.send("GET for user id");
});

//Post - users
router.post("/",(req,res)=>{
    res.send("POST for users");
});

//DELETE -USERS
router.delete("/:id",(req,res)=>{
    res.send("DELETE for user id");
})

module.exports = router;