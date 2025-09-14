import { categories } from "../utils/categories";
import CategoryCard from "./CategoryCard";
import { useState, useEffect } from "react";
import API from "../api/api";
import { Link } from "react-router-dom";

function Categories(){
   const [categories , setCategories ] = useState([]);
  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await API.get(`/category/`);
        const uniqueCategories = response.data;
        setCategories(uniqueCategories);
      } catch (err) {
        console.log(err);
      }
    }
    fetchProduct();
  }, []);
    return(
      <div>
        <h2 className="font-bold">Shop by Category</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 m-2 mt-4">
          {categories.map((category, index)=>(
            <Link to={`/productpage/${category._id}`} key={category._id}> 
                <CategoryCard category={category}/>
            </Link>
              ))} 
        </div>
    </div>
    )
}

export default Categories;