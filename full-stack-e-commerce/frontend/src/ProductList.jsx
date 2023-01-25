import { useState } from "react"

import { useNavigate } from "react-router-dom"

import { useQuery } from "react-query"

import { ProductCard } from "./ProductCard"

import "./ProductList.css"

export function ProductList(props) {
    const navigate = useNavigate()

    // const [categories, setCategories] = useState([])

    // console.log("categories", categories)

    // useEffect(() => {
    //     fetch("http://localhost:3000/categories")
    //         .then((res) => {
    //             return res.json()
    //         })
    //         .then((data) => {
    //             setCategories(data)
    //         })
    // }, [])

    // use useQuery to do the same thing as the code ABOVE, but with caching!

    const {
        isLoading,
        error,
        data: categories,
    } = useQuery("get-categories", () => {
        return fetch("http://localhost:3000/categories").then((res) =>
            res.json()
        )
    })

    console.log("TACO", props)
    // cannot read properties of undefined (reading 'map')

    const items = props.products?.map((product) => {
        return (
            <ProductCard
                key={`product-cart-${product.id}`}
                product={product}
                handleClick={() => {
                    //  props.productSelected(item.id)
                    console.log("HI", product.id)
                    navigate(`/products/${product.id}`)
                }}
            />
        )
    })

    return (
        <div className="ProductList">
            <div className="select-container">
                <label htmlFor="product-category-selector">
                    Select a category:
                </label>
                <select
                    id="product-category-selector"
                    value={props.selectedCategory}
                    onChange={(e) => props.setSelectedCategory(e.target.value)}
                >
                    <option value={""}></option>
                    {categories?.map((category) => {
                        return (
                            <option
                                key={`product-list-category-${category}`}
                                value={category}
                            >
                                {category}
                            </option>
                        )
                    })}
                </select>
            </div>
            <div className="grid-container">{items}</div>
        </div>
    )
}
