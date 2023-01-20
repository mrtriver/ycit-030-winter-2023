import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import "./index.css"

// fetch("http://127.0.0.1:3000/test")
//     .then((res) => {
//         return res.text()
//     })
//     .then((result) => {
//         console.log("result", result)
//     })

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
