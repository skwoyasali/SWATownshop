import { IoArrowBack } from "react-icons/io5";
import {useNavigate} from "react-router-dom";

function SearchProduct() {
  const navigate = useNavigate();
  function handleBack(){
        navigate(-1);
  }
  return (
    <div className="h-screen bg-gray-100">
        <div className="w-full flex p-4 bg-white shadow-md">
        <IoArrowBack className="pr-2 text-3xl" onClick={handleBack}/>
        <input type="text" placeholder="Search Product"  className="w-full pl-2 focus:outline-none"/>
      </div>
    </div>
      
  );
}

export default SearchProduct;