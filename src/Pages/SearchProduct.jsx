import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import API from "../api/api"; // axios instance

function SearchProduct() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // back button handler
  function handleBack() {
    navigate(-1);
  }

  // fetch all products once
  useEffect(() => {
    async function fetchProducts() {
      try {
        const resp = await API.get("/products");
        setProducts(resp.data);
        setFiltered(resp.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    }
    fetchProducts();
  }, []);

  // filter products by query
  useEffect(() => {
    if (!query.trim()) {
      setFiltered(products);
    } else {
      const q = query.toLowerCase();
      setFiltered(
        products.filter((p) =>
          p.name.toLowerCase().includes(q)
        )
      );
    }
  }, [query, products]);

  return (
    <div className="h-screen bg-gray-100">
      {/* Top bar with back + search input */}
      <div className="w-full flex items-center p-4 bg-white shadow-md">
        <IoArrowBack
          className="text-2xl cursor-pointer mr-3"
          onClick={handleBack}
        />
        <input
          type="text"
          placeholder="Search Product"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-2 focus:outline-none"
        />
      </div>

      {/* Results */}
      <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-64px)]">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <div
              key={product._id}
              className="flex items-center rounded-lg p-3 bg-white shadow-sm"
            >
              <img
                src={product.imageUrl || "/placeholder.png"}
                alt={product.name}
                className="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600">₹{product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchProduct;
