const express = require("express");
const router = express.Router();
const controller = require("../controllers/blogController");

router.post("/", controller.createBlog);
router.get("/", controller.getBlogs);
router.get("/:id", controller.getBlog);
router.put("/:id", controller.updateBlog);
router.delete("/:id", controller.deleteBlog);

module.exports = router;
