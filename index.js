const express = require("express")

const { navbar } = require("./data.js")
const { galleryDB } = require("./gallery.js")


const PORT = 9007
const app = express()

//config
app.set("view engine", "ejs")

//middleware
app.use((req, _, next) => {
    console.log("new request", req.method, req.url)
    next()
})

app.use(express.static("public"))

//routes
app.get("/", (req, res) => {
    console.log(navbar)
    res.render("index", { navbar })
})
app.get("/about", (req, res) => {
    console.log(navbar)
    res.render("about", { navbar })
})
app.get("/team", (req, res) => {
    console.log(navbar)
    res.render("team", { navbar })
})
app.get("/contact", (req, res) => {
    console.log(navbar)
    res.render("contact", { navbar })
})
app.get("/gallery", (req, res) => {
    console.log(navbar)
    console.log(galleryDB)

    res.render("gallery", { navbar, galleryDB })
})


//error handler
app.use((_, res) => {
    res.status(404)
    res.sendFile(__dirname + "/public/error.html")
})


//server listen
app.listen(PORT, () => console.log("Server listening on port", PORT))