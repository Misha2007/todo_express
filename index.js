const express = require("express");
const app = express();

const path = require("path");
const fs = require("fs");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  fs.readFile("./tasks", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const tasks = data.split("\n");
    res.render("index", { tasks: tasks });
  });
});

app.post("/", (req, res) => {
  form;
  res.render("index");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
