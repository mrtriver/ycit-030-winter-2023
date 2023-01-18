import { useState } from "react"

import "./App.css"

import { storeName, storeDescription } from "./assets/store-info.json"
import ceramicMugsAndFlasks from "./assets/products.json"

export function App() {
    const [currentView, setCurrentView] = useState("product-list-view")
    const [selectedProductId, setSelectedProductId] = useState(null)

    let renderedView = null

    if (currentView === "product-list-view") {
        renderedView = (
            <ProductList
                ceramicMugsAndFlasks={ceramicMugsAndFlasks}
                setCurrentView={setCurrentView}
                setSelectedProductId={setSelectedProductId}
            />
        )
    } else if (currentView === "single-product-view") {
        const foundProduct = ceramicMugsAndFlasks.find(
            (el) => el.id === selectedProductId
        )

        renderedView = (
            <ProductCard setCurrentView={setCurrentView} {...foundProduct} />
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
    const items = props.ceramicMugsAndFlasks.map((item) => {
        return (
            <ProductCard
                id={item.id}
                key={`product-cart-${item.id}`}
                name={item.name}
                description={item.description}
                price={item.price}
                imageUrl={item.imageUrl}
                setCurrentView={props.setCurrentView}
                setSelectedProductId={props.setSelectedProductId}
            />
        )
    })

    return <div className="ProductList">{items}</div>
}

function ProductCard(props) {
    return (
        <div className="ProductCard">
            <div
                onClick={() => {
                    // setCurrentView("single-product-view")
                    props.setCurrentView((state) => {
                        if (state === "product-list-view") {
                            return "single-product-view"
                        } else {
                            return "product-list-view"
                        }

                        // This is the same as the code above
                        // state === "single-product-view"
                        //     ? "product-list-view"
                        //     : "single-product-view"
                    })

                    if (props.setSelectedProductId) {
                        props.setSelectedProductId(props.id)
                    }

                    // setSelectedProductId && setSelectedProductId(id) // same as the code right above
                }}
            >
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
