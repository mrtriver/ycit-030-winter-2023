import { useState } from "react"

export function useGetCurrentView() {
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

    return {
        currentView,
        selectedProductId,
        productSelected,
        productUnselected,
    }
}
