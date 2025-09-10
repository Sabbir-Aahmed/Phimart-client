import { Link } from "react-router";

const PaymentSuccess = () => {
  return (
    <div className="text-2xl font-semibold  items-center mx-auto">
      Payment success! Return to{" "}
        <Link className="text-pink-500 hover:text-pink-600" to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default PaymentSuccess;