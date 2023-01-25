import { useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import { useQuery } from "react-query"

import { storeName, storeDescription } from "./assets/store-info.json"

import { Header } from "./Header"
import { HeaderProfile } from "./HeaderProfile"
import { ProductList } from "./ProductList"
import { ProductCard } from "./ProductCard"

import "./App.css"

// moved to the server
// import ceramicMugsAndFlasks from "./assets/products.json"

export function App(props) {
    const navigate = useNavigate()
    // These states go away because react-router manages it for us automatically
    // const [currentView, setCurrentView] = useState("product-list-view")
    // const [selectedProductId, setSelectedProductId] = useState(null)

    const [selectedCategory, setSelectedCategory] = useState("")
    // console.log("selectedCategory", selectedCategory)

    // function productSelected(id) {
    //     console.log("ID", id)
    //     setSelectedProductId(id)
    //     setCurrentView("single-product-view")
    // }

    // function productUnselected() {
    //     setSelectedProductId(null)
    //     setCurrentView("product-list-view")
    // }

    // console.log("products", products)

    // useEffect(() => {
    //     fetch(`http://localhost:3000/products?category=${selectedCategory}`)
    //         .then((res) => {
    //             return res.json()
    //         })
    //         .then((data) => {
    //             // console.log("data", data)
    //             setProducts(data)
    //         })
    // }, [selectedCategory])

    // This is basically the same as the code commented out ABOVE, but with caching (cache lives for 5 minutes before application will perform a new fetch)
    const {
        isLoading,
        error,
        data: products,
    } = useQuery(["get-products-by-category", selectedCategory], () => {
        return fetch(
            `http://localhost:3000/products?category=${selectedCategory}`
        ).then((res) => res.json())
    })

    // console.log("SMOKEY", { isLoading, error, products })

    // let renderedView = null
    // switch (currentView) {
    //     case "product-list-view":
    //         renderedView = (
    //             <ProductList
    //                 products={products}
    //                 productSelected={(id) => productSelected(id)}
    //                 selectedCategory={selectedCategory}
    //                 setSelectedCategory={setSelectedCategory}
    //             />
    //         )
    //         break
    //     case "single-product-view":
    //         const foundProduct = products.find(
    //             (el) => el.id === selectedProductId
    //         )

    //         renderedView = (
    //             <ProductCard
    //                 handleClick={() => productUnselected()}
    //                 {...foundProduct}
    //             />
    //         )
    //         break
    // }

    return (
        <div className="App">
            <Header storeName={storeName} storeDescription={storeDescription}>
                <HeaderProfile />
            </Header>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProductList
                            products={products}
                            // productSelected={(id) => productSelected(id)}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                    }
                />

                <Route
                    path="products/:id"
                    element={
                        <ProductCard
                            products={products}
                            handleClick={() => navigate("/")}
                        />
                    }
                />
            </Routes>
        </div>
    )
}
