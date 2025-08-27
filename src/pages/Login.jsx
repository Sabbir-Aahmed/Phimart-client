
import useAuthContext from "../hooks/useAuthContext";


const Login = () => {
    const {loginUser} = useAuthContext()
    return (
        <div>
            <h1>this is log in page</h1>
            <button className="btn btn-secondary" onClick={() => loginUser("admin@gmail.com", "#Admin1234")}>Click to login</button>
        </div>
    );
};

export default Login;