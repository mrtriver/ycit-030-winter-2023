const express = require("express")

const app = express()

const products = require("./products.json")

app.use((req, res, next) => {
    console.log(`${req.method} request received for ${req.url} from ${req.ip}`)
    next()
})

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
    next()
})

app.get("/test", (req, res) => {
    res.send("it's working")
})

app.get("/products", (req, res) => {
    res.json(products)
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})
