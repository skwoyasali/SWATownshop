import { useEffect, useState } from "react";
import API from "../api/api";

function AddProduct() {
  const [categories, setCategories] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [addCategory, setAddCategory] = useState(false);
  const [catForm, setCatForm] = useState({
    category: "",
    categoryUrl: "",
  });
  const [form, setForm] = useState({
    name: "",
    price: "",
    prevprice: "",
    stock: "",
    imageUrl: "",
    description: "",
    category: "",
  });

  // Fetch categories once
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await API.get(`/category/`);
        setCategories(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategory();
  }, [refetch]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleCategoryChange(e) {
    setCatForm({ ...catForm, [e.target.name]: e.target.value });
  }

  async function handleAddCategory(e) {
    e.preventDefault();
    try {
      const newCategory = await API.post(`/category/`, catForm);
      console.log(newCategory.data);
      alert("Category Added Succesfully");
      setCatForm({
        category: "",
        categoryUrl: "",
      });
      setRefetch(!refetch);
    } catch (err) {
      alert("Failed to add Category");
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await API.post(`/products/`, form);
      console.log("Product added:", response.data);
      alert("✅ Product added successfully!");
      setForm({
        name: "",
        price: "",
        prevprice: "",
        stock: "",
        imageUrl: "",
        description: "",
        category: "",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add product");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Add a new Product</h2>

      <input
        type="text"
        name="name"
        value={form.name}
        placeholder="Product Name"
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="number"
        name="price"
        value={form.price}
        placeholder="Product Price"
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="number"
        name="prevprice"
        value={form.prevprice}
        placeholder="Previous Price"
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="number"
        name="stock"
        value={form.stock}
        placeholder="Product Stock"
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="text"
        name="imageUrl"
        value={form.imageUrl}
        placeholder="Product Image URL"
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="text"
        name="description"
        value={form.description}
        placeholder="Product Description"
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />

      <div className="mb-4">
        <div className="flex m-2">
          <button
            type="button"
            onClick={() => {setShowCategory(!showCategory); setAddCategory(false)}}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {showCategory ? "Hide Category" : "Choose Category"}
          </button>
          <button
            type="button"
            onClick={() => {
              setShowCategory(false);
              setAddCategory(!addCategory);
            }}
            className="px-4 py-2 ml-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {addCategory ? "Hide" : "Add Category"}
          </button>
        </div>
        {addCategory && (
            <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8">

            <input
              type="text"
              name="category"
              value={catForm.category}
              placeholder="Category"
              className="w-full p-2 mb-4 border rounded"
              onChange={handleCategoryChange}
            />
            <input
              type="text"
              name="categoryUrl"
              value={catForm.categoryUrl}
              placeholder="CategoryUrl"
              className="w-full p-2 mb-4 border rounded"
              onChange={handleCategoryChange}
            />
            <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600" onClick={handleAddCategory}>Save Category</button>
        </div>
        )}
        {showCategory && (
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="mt-3 w-full p-2 border rounded"
          >
            <option value="" disabled>
              -- Select a Category --
            </option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.category}
              </option>
            ))}
          </select>
        )}
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600"
      >
        Submit
      </button>
    </form>
  );
}

export default AddProduct;
