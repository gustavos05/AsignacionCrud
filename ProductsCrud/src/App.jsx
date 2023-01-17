import "./index.css";
import { useState, useEffect } from "react";
import FormProduct from "./Components/FormProduct";
import ProductCard from "./Components/ProductCard";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [productDataUpdate, setProductDataUpdate] = useState(null);

  useEffect(() => {
    axios
      .get("https://products-crud.academlo.tech/products/")
      .then((resp) => setProducts(resp.data))
      .catch((error) => console.error(error));
  }, []);

  const getAPIData = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((resp) => setProducts(resp.data))
      .catch((error) => console.error(error));
  };

  const addProducts = (data) => {
   
    axios
      .post("https://products-crud.academlo.tech/products/", data)
      .then(() => getAPIData())
      .catch((error) => console.error(error));
  };

  const deleteProduct = (productId) => {
  
    axios 
      .delete(`https://products-crud.academlo.tech/products/${productId}/`)
      .then(() => getAPIData())
      .catch((error) => console.error(error));
  };

  const selectProduct = (productData) => {
    setProductDataUpdate(productData);
  };

  const updateProduct = (editedProduct) => {
    const index = products.findIndex((product) => product.id === editedProduct.id);

    products[index] = editedProduct;
    setProducts([...products]);
    setProductDataUpdate(null);
  };

  return (
    <div className="App">
      <FormProduct
        createProductData={(data) => addProducts(data)}
        productSelectedData={productDataUpdate}
        updateProduct={updateProduct}
      />
      <ProductCard
        products={products}
        deleteProduct={deleteProduct}
        selectProduct={selectProduct}
      />
    </div>
  );
}

export default App;
