import "./App.css"

import storeInfo from "./assets/store-info.json"

import { ceramicMugsAndFlasks } from "./products"

export function App() {
    const { storeName, storeDescription } = storeInfo

    return (
        <div className="App">
            <h1>{storeName}</h1>
            <h2>{storeDescription}</h2>
            <ProductList />
        </div>
    )
}

function ProductList(props) {
    const items = ceramicMugsAndFlasks.map((item) => {
        return <ProductCard {...item} />
    })

    return <div className="ProductList">{items}</div>
}

function ProductCard(props) {
    const { name, description, price, imageUrl } = props

    return (
        <div className="ProductCard">
            <div className="image-container">
                <img src={imageUrl} />
            </div>
            <div className="ProductInfo">
                <h3>{name}</h3>
                <p>{description}</p>
                <p>Price: {price}</p>
            </div>
            <button className="buy-button">Buy</button>
        </div>
    )
}
