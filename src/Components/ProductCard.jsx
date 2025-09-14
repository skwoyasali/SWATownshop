import dotenv from "dotenv";
import axios from "axios";

function ProductCard({ product }) {
  return (
    <div className="m-auto my-2">
      <img
        className="rounded"
        src={product.imageUrl}
        height="136px"
        width="136px"
        alt="Logo"
      />
      <p>{product.name}</p>
      <p>{product.stock}</p>
      <div className="border border-orange-700 rounded m-2 flex items-center justify-center w-fit h-fit">
        <div className="font-medium bg-orange-600 p-1">₹{product.price}</div>
        <div className="line-through text-gray-500 p-1">₹{product.prevprice}</div>
      </div>

      <button className="border border-orange-600 rounded px-5 w-full">
        Add
      </button>
    </div>
  );
}

export default ProductCard;
