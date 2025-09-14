import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

function SearchBar() {
  return (
    <div className="sticky top-0 p-2 bg-orange-500">
    <Link to="/searchproduct">
      <div className="flex items-center border border-orange-600 rounded-2xl px-3 py-4 w-full sm:hidden z-50 bg-white">
        <IoSearchOutline className="w-5 h-5 text-orange-600 mr-2" />
        <p className="text-gray-600">Search for products</p>
      </div>
    </Link>
  </div>
  );
}

export default SearchBar;
