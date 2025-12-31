const express = require('express')
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require('../controller/blog.controller')

const router = express.Router()

/* ===== EJS PAGES ===== */

router.get('/', (req, res) => {
  res.redirect('/blogs')
})

router.get('/blogs', getAllBlogs)

router.get('/blogs/create', (req, res) => {
  res.render('blogs/create')
})

router.get('/blogs/:id', getBlogById)

router.get('/blogs/edit/:id', (req, res) => {
  const blog = global.blogs.find((b) => b.id === Number(req.params.id))
  res.render('blogs/edit', { blog })
})

// Form Submit Route

router.post('/blogs', createBlog)
router.post('/blogs/update/:id', updateBlog)
router.post('/blogs/delete/:id', deleteBlog)

module.exports = router
