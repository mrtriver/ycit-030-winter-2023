import { ProductCard } from "./ProductCard"

export function ProductList(props) {
    const items = props.products.map((item) => {
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
