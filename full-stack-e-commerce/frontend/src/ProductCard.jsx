export function ProductCard(props) {
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
