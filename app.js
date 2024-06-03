const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs'); // fs -- file system

//File handling app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    fs.readdir(`/files`, function(err, files){
        res.render("index", {files: files})
    });
})

app.get("/edit/:filename", function(req, res){
    res.render("edit");
})

app.get("/files/:filename", function(req, res){
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, filedata) {
        res.render("app", {filename: req.params.filename, filedata: filedata});
    })
})

app.post("/create", function(req, res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
        res.redirect("/");
    });
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});