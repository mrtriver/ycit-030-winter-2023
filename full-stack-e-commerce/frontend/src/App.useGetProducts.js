import { useState, useEffect } from "react"

export function useGetProducts() {
    const [products, setProducts] = useState([])

    // console.log("products", products)

    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                // console.log("data", data)
                setProducts(data)
            })
    }, [])

    return products
}
