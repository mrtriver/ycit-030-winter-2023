import "./Header.css"

export function Header(props) {
    return (
        <div className="Header">
            <div>
                <h1>{props.storeName}</h1>
                <h2>{props.storeDescription}</h2>
            </div>
            {props.children}
        </div>
    )
}
