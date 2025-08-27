import { useContext } from "react";
import AuthContext from "../context/AuthContext";


const Login = () => {
    const {loginUser} = useContext(AuthContext)
    return (
        <div>
            <h1>this is log in page</h1>
            <button className="btn btn-secondary" onClick={() => loginUser("admin@gmail.com", "#Admin1234")}>Click to login</button>
        </div>
    );
};

export default Login;