const express = require("express");
const path = require("path");

const blogRoutes = require("./src/routes/blog.routes");

const app = express();

app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Routes
app.use("/", blogRoutes);

module.exports = { app };
