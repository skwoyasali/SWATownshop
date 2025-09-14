import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";

function ProductPage() {
  const{id} = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await API.get(`/products/`);
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchProduct();
  }, []);
  
  let filteredProducts = [];
  if (id) {
    filteredProducts = products.filter((p) => String(p.category) === id);
  } else {
    filteredProducts = products;
  }
 console.log(filteredProducts)
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default ProductPage;
