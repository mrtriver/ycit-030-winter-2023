import { useState } from "react"

import "./App.css"

import storeInfo from "./assets/store-info.json"

import { ceramicMugsAndFlasks } from "./products"

export function App() {
    const [currentView, setCurrentView] = useState("product-list-view")
    const [selectedProductId, setSelectedProductId] = useState(null)

    const { storeName, storeDescription } = storeInfo

    console.log(currentView)

    let renderedView
    if (currentView === "product-list-view") {
        renderedView = (
            <ProductList
                setCurrentView={setCurrentView}
                setSelectedProductId={setSelectedProductId}
            />
        )
    } else if (currentView === "single-product-view") {
        const selectedItem = ceramicMugsAndFlasks.find(
            (item) => item.id === selectedProductId
        )

        renderedView = <ProductCard {...selectedItem} />
    } else {
        renderedView = <div>Error! Something went wrong.</div>
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
    const items = ceramicMugsAndFlasks.map((item) => {
        return (
            <ProductCard
                key={`product-cart-${item.id}`}
                setCurrentView={props.setCurrentView}
                setSelectedProductId={props.setSelectedProductId}
                {...item}
            />
        )
    })

    return <div className="ProductList">{items}</div>
}

function ProductCard(props) {
    const {
        id,
        name,
        description,
        price,
        imageUrl,
        setCurrentView,
        setSelectedProductId,
    } = props

    return (
        <div className="ProductCard">
            <div
                onClick={() => {
                    setCurrentView("single-product-view")
                    setSelectedProductId(id)
                }}
            >
                <div className="image-container">
                    <img src={imageUrl} />
                </div>
                <div className="ProductInfo">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p>Price: {price}</p>
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
