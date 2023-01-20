import "./App.css"

import { storeName, storeDescription } from "./assets/store-info.json"

import { useGetProducts } from "./App.useGetProducts"
import { useGetCurrentView } from "./App.useGetCurrentView"

import { Header } from "./Header"
import { HeaderProfile } from "./HeaderProfile"
import { ProductList } from "./ProductList"
import { ProductCard } from "./ProductCard"

// moved to the server
// import ceramicMugsAndFlasks from "./assets/products.json"

export function App() {
    const products = useGetProducts()

    const {
        currentView,
        selectedProductId,
        productSelected,
        productUnselected,
    } = useGetCurrentView()

    let renderedView = null
    switch (currentView) {
        case "product-list-view":
            renderedView = (
                <ProductList
                    products={products}
                    productSelected={(id) => productSelected(id)}
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
