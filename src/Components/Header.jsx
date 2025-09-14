import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import SearchBar from "./Searchbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="shadow">
      <nav className="flex justify-between">
        <div>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/djlo5utij/image/upload/v1755498730/ChatGPT_Image_Aug_17_2025_08_57_20_PM_mrnyif.png"
              width="120px"
              height="45px"
              alt="Logo"
            />
          </Link>
        </div>
        <ol className="flex p-6 ">
          
            <Link to="/login">
            <li className="flex">
              <CgProfile className="w-[24px] h-[24px]" />
              <p className="pl-2">Login</p>
            </li>  
            </Link>
         
          <li className="pl-2">
            <FaCartShopping className="w-[24px] h-[24px]" />
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Header;
