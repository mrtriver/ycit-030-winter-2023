import { useParams } from "react-router-dom"

import "./ProductCard.css"

export function ProductCard(props) {
    // console.log("GINGER", props)

    const params = useParams()

    console.log(params)

    const product =
        props.product ||
        props.products?.find((el) => el.id === Number(params.id)) ||
        {}

    return (
        <div className="ProductCard">
            <div onClick={props.handleClick}>
                <div className="image-container">
                    <img src={product.imageUrl} />
                </div>
                <div className="ProductInfo">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
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
