import { NavLink } from "react-router-dom";
import { sidebarInfo } from "../../mockup-data/sideBar-data";
import "./styles.scss";
import { IoChevronDown } from "react-icons/io5";
import { Briefcase } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../utils/reducer/store";
import { VscChromeClose } from "react-icons/vsc";
import { toggle } from "../../utils/reducer/toggle-slice";

export const Sidebar = () => {
  const toggleState = useSelector(
    (state: RootState) => state.sidebarToggler.value
  );
  const dispatch = useDispatch();
  return (
    <>
      <section className={toggleState ? "sidebar active" : "sidebar"}>
        <div className="close_btn" onClick={() => dispatch(toggle())}>
          <VscChromeClose />
        </div>
        {sidebarInfo.map((i, key) => {
          return (
            <div key={key}>
              <h3
                className={i.heading === "switch oranization" ? "heading" : ""}
              >
                <span>
                  {i.heading === "switch oranization" ? <Briefcase /> : ""}
                </span>
                {i.heading}
                <span>
                  {i.heading === "switch oranization" ? <IoChevronDown /> : ""}
                </span>
              </h3>
              <ul>
                {i.links.map((i, key) => {
                  return (
                    <NavLink key={key} to={`${i.link}`}>
                      <span>{<i.icon />}</span> {i.name}
                    </NavLink>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </section>
      <div
        className={toggleState ? "overlay active" : "overlay"}
        onClick={() => dispatch(toggle())}
      ></div>
    </>
  );
};
