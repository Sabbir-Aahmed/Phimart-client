
import {
  FiPackage,
  FiShoppingCart,
  FiStar,
  FiUsers,
} from "react-icons/fi";

import StateCard from "../Components/Dashboard/StateCard";
import Order from "../Components/Dashboard/Order";
const Dashboard = () => {

    return (
        <div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StateCard icon={FiPackage} title={"Total Products"} value={'245'}/>
            <StateCard icon={FiShoppingCart} title={"Total Orders"} value={'128'}/>
            <StateCard icon={FiUsers} title={"Total Users"} value={'573'}/>
            <StateCard icon={FiStar} title={"Average Rating"} value={'4.8'}/>
          </div>
        <Order/>
        </div>
    );
};

export default Dashboard;