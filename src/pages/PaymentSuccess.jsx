
import { Link } from 'react-router';

const PaymentSuccess = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold'>Payment success return to <Link className='text-pink-500' to={"/dashboard"}>Dashboard</Link></h1>
        </div>
    );
};

export default PaymentSuccess;