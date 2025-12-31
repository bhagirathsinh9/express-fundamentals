let blogs = []
let id = 1

global.blogs = blogs

exports.getAllBlogs = (req, res) => {
  return res.render('blogs/index', { blogs })
}

exports.getBlogById = (req, res) => {
  const blog = blogs.find((b) => b.id === Number(req.params.id))

  if (!blog) return res.send('Blog not found')
  res.render('blogs/show', { blog })
}

exports.createBlog = (req, res) => {
  const { title, content, image } = req.body;

blogs.push({
  id: Date.now(),
  title,
  content,
  image   
});
  return res.redirect('/blogs')
}

exports.updateBlog = (req, res) => {
  const blog = blogs.find((b) => b.id === Number(req.params.id))
  blog.title = req.body.title
  blog.content = req.body.content
  blog.image = req.body.image
  res.redirect('/blogs')
}

exports.deleteBlog = (req, res) => {
  blogs = blogs.filter((b) => b.id !== Number(req.params.id))
  global.blogs = blogs
  res.redirect('/blogs')
}
