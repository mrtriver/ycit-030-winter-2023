import "./App.css";
import storeInfo from "./assets/store-info.json";
import { ceramicMugsAndFlasks } from "./products";
import { useState } from "react";
function App() {
      
    const [currentView, setCurrentView] = useState("productListView")
    const [selectedProductId, setSelectedProductId] = useState(null)

    
    //Object destructuring
    const { storeName, storeDescription } = storeInfo;

    
    let renderedView;
    if (currentView === "productListView") {
    
      renderedView = <ProductList setCurrentView={setCurrentView} 
      setSelectedProductId={setSelectedProductId} />;
    } else if (currentView === "productDetailView") {
     
      const selectedItem = ceramicMugsAndFlasks.find((item) => item.id === selectedProductId)
     // renderedView = <ProductCard name={selectedItem.name} description={selectedItem.description} price={selectedItem.price} imageUrl={selectedItem.imageUrl} />;
      renderedView = <ProductCard {...selectedItem} />;
     } else {
      renderedView = <div>404 Not Found</div>
       }
      

    //*************return *************//
    return (
        <div>
            <h1>{storeName}</h1>
            <h2>{storeDescription}</h2>
            <div className="grid_container">
               {renderedView}
            </div>
        </div>
    );
    //*************return *************//
    //*************ProductList *************//
    function ProductList(props) {
        const items = ceramicMugsAndFlasks.map((item) => {
         
            return (
               
            <ProductCard key={`product-card-${item.id}`} 
            {...item} 
            setCurrentView ={props.setCurrentView}
            setSelectedProductId={props.setSelectedProductId}
            />
            )
           
        });

        return (
            <div>
                <div className="ProductList">{items} </div>
            </div>
        );
    }
    //*************ProductList *************//
    //*************ProductCard *************//

    function ProductCard(props) {
        const { id, name, description, price, imageUrl, setCurrentView, setSelectedProductId } = props;

        return (
            <div className="ProductCard">
                <div
                    onClick={() => {
                      setCurrentView("productDetailView");
                      setSelectedProductId(id);
                    }}
                >
                    <div className="image-container">
                        <img src={imageUrl} />
                    </div>
                    <div className="ProductInfo">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <p>Price:{price}</p>
                    </div>
                </div>

                <button
                    className="buy-button"
                    onClick={() => {
                        alert("Buy button clicked");
                    }}
                >
                    Buy
                </button>
            </div>
        );
    }
    //*************ProductCard *************//
}

export default App;
