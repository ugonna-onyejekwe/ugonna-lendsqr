import "./styles.scss";
import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { TbUserCheck, TbUserX } from "react-icons/tb";
import { Link } from "react-router-dom";

export const UserDropDown = ({ id }: { id: string }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown_wrapper">
      <p
        className="drop_menu"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <BiDotsVerticalRounded />
      </p>

      <div className={isActive ? "dropdown active" : "dropdown"}>
        <Link to={`/dashboard/user-details/${id}`}>
          <span>
            <IoEyeOutline />
          </span>
          view details
        </Link>
        <Link to="#">
          <span>
            <TbUserX />
          </span>
          blacklist user
        </Link>
        <Link to="#">
          <span>
            <TbUserCheck />
          </span>
          activate user
        </Link>
      </div>
    </div>
  );
};
