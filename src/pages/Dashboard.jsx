import { useState } from "react";
import {
  FiPackage,
  FiShoppingCart,
  FiStar,
  FiUsers,
} from "react-icons/fi";

import Sidebar from "../Components/Dashboard/Sidebar";
import Navbar from "../Components/Dashboard/Navbar";
import StateCard from "../Components/Dashboard/StateCard";
import Order from "../Components/Dashboard/Order";
const Dashboard = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="drawer lg:drawer-open">
      {/* Mobile drawer checkbox */}
      <input
        id="drawer-toggle"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarOpen}
        onChange={toggleSidebar}
      />

      {/* Page content */}
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <Navbar sidebarOpen={sidebarOpen}/>

        {/* Main content */}
        <main className="p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StateCard icon={FiPackage} title={"Total Products"} value={'245'}/>
            <StateCard icon={FiShoppingCart} title={"Total Orders"} value={'128'}/>
            <StateCard icon={FiUsers} title={"Total Users"} value={'573'}/>
            <StateCard icon={FiStar} title={"Average Rating"} value={'4.8'}/>
          </div>
        <Order/>
        </main>
      </div>

      {/* Sidebar */}
      <Sidebar/>
    </div>
    );
};

export default Dashboard;