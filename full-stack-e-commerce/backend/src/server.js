const express = require("express")

const app = express()

const products = require("./products.json")

app.use((req, res, next) => {
    console.log(
        `${req.method} request received for ${req.url} from ${req.ip} origin ${req.headers.origin}`
    )
    next()
})

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
    next()
})

app.get("/test", (req, res) => {
    console.log("do we see this console log in our terminal?")
    res.send("it's working")
})

app.get("/products", (req, res) => {
    // console.log("qp", req.query.category)

    if (req.query.category) {
        res.json(products.filter((el) => el.category === req.query.category))
    } else {
        res.json(products)
    }
})

app.get("/categories", (req, res) => {
    // const categories = []
    // products.forEach((product) => {
    //     if (!categories.some((category) => category === product.category)) {
    //         categories.push(product.category)
    //     }
    // })

    // this is the same as the code above
    // super trick to get the distinct Set of primitive elements
    const categories = [...new Set(products.map((el) => el.category))]

    res.json(categories)
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})
