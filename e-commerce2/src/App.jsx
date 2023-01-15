import "./App.css";
import storeInfo from "./assets/store-info.json";
import { ceramicMugsAndFlasks } from "./products";

function App() {

  //Object destructuring
  const { storeName, storeDescription } = storeInfo;
  return (
    <div>
      <h1>{storeName}</h1>
      <h2>{storeDescription}</h2>
      <ProductList />
    </div>
  );
  function ProductList(props) {
    const items = ceramicMugsAndFlasks.map((item) => {
      return   <ProductCard {...item} />     
      
    })

    return (
      <div>
       <div className="ProductList">{items} </div>
     
     
      </div>
    );
  }

  function ProductCard(props) {
    const { name, description, price, imageUrl } = props;
    return (
      <div className="ProductCard">
        <img src={imageUrl}  />
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Price:{price}</p>
        <button className="buy-button">Buy</button>
      </div>
    );
  }
}

export default App;
