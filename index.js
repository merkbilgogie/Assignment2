const express = require('express')
var port = process.env.PORT || 2000;
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))


app.get('/', (req, res) =>{
  res.render("home", {
    
  })

})

app.get('/home', (req, res) => {
  res.render("home")

})

app.get('/about', (req, res) =>{
  res.render("about")
  
})
app.get('/projects', (req, res) =>{
  res.render("projects")
  
})
app.get('/blogs', (req, res) =>{
  res.render("blogs")
  
})




app.listen(port()=>{
  console.log('app is running')});

