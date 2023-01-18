import { useState } from "react"

import "./App.css"

import { storeName, storeDescription } from "./assets/store-info.json"
import ceramicMugsAndFlasks from "./assets/products.json"

const initialState = {
    currentView: "product-list-view",
    selectedProductId: null,
}

export function App() {
    const [state, setState] = useState(initialState)

    function productSelected(id) {
        setState({
            currentView: "single-product-view",
            selectedProductId: id,
        })
    }

    function productUnselected() {
        setState(initialState)
    }

    let renderedView = null

    if (state.currentView === "product-list-view") {
        renderedView = (
            <ProductList
                ceramicMugsAndFlasks={ceramicMugsAndFlasks}
                productSelected={(id) => productSelected(id)}
            />
        )
    } else if (state.currentView === "single-product-view") {
        const foundProduct = ceramicMugsAndFlasks.find(
            (el) => el.id === state.selectedProductId
        )

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
    const items = props.ceramicMugsAndFlasks.map((item) => {
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
