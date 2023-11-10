const express = require("express");
const router = express.Router();
const {setPosts} = require("../controllers/post.controller");


router.get("/", setPosts);

router.post("/", setPosts);

router.put('/:id', editPost);

router.delete("/:id", deletepost);



module.exports = router; 