const express = require("express");
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
} = require("../controller/blog.controller");

const router = express.Router();

/* ===== EJS PAGES ===== */

// Home → blogs
router.get("/", (req, res) => {
  res.redirect("/blogs");
});

// List blogs
router.get("/blogs", getAllBlogs);

// Create page
router.get("/blogs/create", (req, res) => {
  res.render("blogs/create");
});

// View single blog
router.get("/blogs/:id", getBlogById);

// Edit page
router.get("/blogs/edit/:id", (req, res) => {
  const blog = global.blogs.find(b => b.id === Number(req.params.id));
  res.render("blogs/edit", { blog });
});

/* ===== FORM ACTIONS ===== */

router.post("/blogs", createBlog);
router.post("/blogs/update/:id", updateBlog);
router.post("/blogs/delete/:id", deleteBlog);

module.exports = router;
