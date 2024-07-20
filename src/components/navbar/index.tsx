import "./styles.scss";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
import { avatar, logo, logoIcon } from "../../assets";
import { IoIosNotificationsOutline, IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../../utils/reducer/toggle-slice";

export const Navbar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className={isSearching ? "container isSearching" : "container"}>
        <Link to={"/dashboard/users"} className="logo">
          <img src={logo} alt="logo" className="logo_img" />
          <img src={logoIcon} alt="logo" className="logo_icon" />
        </Link>

        <div className="search_con">
          <input type="search" placeholder="Search for anything" />
          {isSearching ? (
            <button onClick={() => setIsSearching(false)}>
              <IoCloseOutline />
            </button>
          ) : (
            <button>
              <IoSearchOutline />
            </button>
          )}
        </div>

        <div className="navigators">
          <span className="search_btn" onClick={() => setIsSearching(true)}>
            <IoSearchOutline />
          </span>
          <Link to="#" className="docs">
            docs
          </Link>
          <Link to="#" className="notification">
            <IoIosNotificationsOutline />
          </Link>

          <div className="user_section">
            <div className="avatar">
              <img src={avatar} alt="user-image" />
            </div>

            <h4>
              adedeji
              <span>
                <IoMdArrowDropdown />
              </span>
            </h4>
          </div>

          <div className="menu_btn" onClick={() => dispatch(toggle())}>
            <RiMenu3Fill />
          </div>
        </div>
      </div>
    </div>
  );
};
