import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import { Sidebar } from "../../components/sidebar";
import "./styles.scss";

export const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="dashboard_page">
        <Sidebar />

        <div className="main_wrapper">
          <Outlet />
        </div>
      </div>
    </>
  );
};
