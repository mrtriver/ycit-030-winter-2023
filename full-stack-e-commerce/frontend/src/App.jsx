import { useState, useEffect } from "react"

import "./App.css"

import { storeName, storeDescription } from "./assets/store-info.json"

// moved to the server
// import ceramicMugsAndFlasks from "./assets/products.json"

export function App() {
    const [currentView, setCurrentView] = useState("product-list-view")
    const [selectedProductId, setSelectedProductId] = useState(null)
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

    function productSelected(id) {
        console.log("ID", id)
        setSelectedProductId(id)
        setCurrentView("single-product-view")
    }

    function productUnselected() {
        setSelectedProductId(null)
        setCurrentView("product-list-view")
    }

    let renderedView = null

    if (currentView === "product-list-view") {
        renderedView = (
            <ProductList
                products={products}
                productSelected={(id) => productSelected(id)}
            />
        )
    } else if (currentView === "single-product-view") {
        const foundProduct = products.find((el) => el.id === selectedProductId)

        renderedView = (
            <ProductCard
                handleClick={() => productUnselected()}
                {...foundProduct}
            />
        )
    }

    return (
        <div className="App">
            <h1>{storeName}</h1>
            <h2>{storeDescription}</h2>
            {renderedView}
        </div>
    )
}

function ProductList(props) {
    const items = props.products.map((item) => {
        return (
            <ProductCard
                id={item.id}
                key={`product-cart-${item.id}`}
                name={item.name}
                description={item.description}
                price={item.price}
                imageUrl={item.imageUrl}
                handleClick={() => props.productSelected(item.id)}
            />
        )
    })

    return <div className="ProductList">{items}</div>
}

function ProductCard(props) {
    return (
        <div className="ProductCard">
            <div onClick={props.handleClick}>
                <div className="image-container">
                    <img src={props.imageUrl} />
                </div>
                <div className="ProductInfo">
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                    <p>Price: {props.price}</p>
                </div>
            </div>
            <button
                className="buy-button"
                onClick={() => alert("Button clicked")}
            >
                Buy
            </button>
        </div>
    )
}
