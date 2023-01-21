import { useState, useEffect } from "react"

import { ProductCard } from "./ProductCard"

import "./ProductList.css"

export function ProductList(props) {
    const [categories, setCategories] = useState([])

    // console.log("categories", categories)

    useEffect(() => {
        fetch("http://localhost:3000/categories")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setCategories(data)
            })
    }, [])

    const items = props.products
        // .filter(
        //     (item) =>
        //         !props.selectedCategory ||
        //         item.category === props.selectedCategory
        // )
        .map((item) => {
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
                    {categories.map((category) => {
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
