import { useState, useEffect } from "react"

import { storeName, storeDescription } from "./assets/store-info.json"

import { Header } from "./Header"
import { HeaderProfile } from "./HeaderProfile"
import { ProductList } from "./ProductList"
import { ProductCard } from "./ProductCard"

import "./App.css"

// moved to the server
// import ceramicMugsAndFlasks from "./assets/products.json"

export function App() {
    const [selectedCategory, setSelectedCategory] = useState("")

    console.log("selectedCategory", selectedCategory)

    const [currentView, setCurrentView] = useState("product-list-view")
    const [selectedProductId, setSelectedProductId] = useState(null)

    function productSelected(id) {
        console.log("ID", id)
        setSelectedProductId(id)
        setCurrentView("single-product-view")
    }

    function productUnselected() {
        setSelectedProductId(null)
        setCurrentView("product-list-view")
    }

    const [products, setProducts] = useState([])

    // console.log("products", products)

    useEffect(() => {
        fetch(`http://localhost:3000/products?category=${selectedCategory}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                // console.log("data", data)
                setProducts(data)
            })
    }, [selectedCategory])

    let renderedView = null
    switch (currentView) {
        case "product-list-view":
            renderedView = (
                <ProductList
                    products={products}
                    productSelected={(id) => productSelected(id)}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            )
            break
        case "single-product-view":
            const foundProduct = products.find(
                (el) => el.id === selectedProductId
            )

            renderedView = (
                <ProductCard
                    handleClick={() => productUnselected()}
                    {...foundProduct}
                />
            )
            break
    }

    return (
        <div className="App">
            <Header storeName={storeName} storeDescription={storeDescription}>
                <HeaderProfile />
            </Header>
            {renderedView}
        </div>
    )
}
