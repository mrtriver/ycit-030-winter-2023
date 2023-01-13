import "./App.css"

import storeInfo from "./assets/store-info.json"

// import chuckImgUrl from "./assets/images/Chuck.jpg"

export function App() {
    const { storeName, storeDescription } = storeInfo

    return (
        <div>
            <h1>{storeName}</h1>
            <h2>{storeDescription}</h2>
            <ProductList />
        </div>
    )
}

function ProductList(props) {
    return (
        <div>
            <ProductCard />
        </div>
    )
}

function ProductCard() {
    // console.log(chuckImgUrl)
    return (
        <div>
            <img src="/src/assets/images/Chuck.jpg" />
        </div>
    )
}
