import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import ErrorAlert from "../Components/Products/ErrorAlert";
import { useState } from "react";

const Register = () => {
  const { registerUser, errorMsg } = useAuthContext();
  const [successMsg, setSuccessMsg] = useState("");
  // const naviate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    delete data.confirm_password;
    try {
      const response = await registerUser(data);
      if (response.success) {
        setSuccessMsg(response.message);
        // setTimeout(() => naviate("/login"), 3000);
      }
    } catch (error) {
      console.log("Registration failed", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          {errorMsg && <ErrorAlert error={errorMsg} />}
          {successMsg && (
            <div role="alert" className="alert alert-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{successMsg}</span>
            </div>
          )}
          <h2 className="card-title text-2xl font-bold">Sign Up</h2>
          <p className="text-base-content/70">
            Create an Account to get started
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4 ">
            <div className="form-coltrol">
              <label className="label" htmlFor="first_name">
                <span className="label-text">First Name</span>
              </label>

              <input
                id="first_name"
                type="text"
                placeholder="John"
                className={`input input-bordered w-full `}
                {...register("first_name", {
                  required: "First Name is required",
                })}
              />
              {errors.first_name && (
                <span className="label-text-alt text-error">
                  {errors.first_name.message}
                </span>
              )}
            </div>
            <div className="form-coltrol">
              <label className="label" htmlFor="last_name">
                <span className="label-text">Last Name</span>
              </label>

              <input
                id="last_name"
                type="text"
                placeholder="Doe"
                className={`input input-bordered w-full `}
                {...register("last_name", {
                  required: "Last Name is required",
                })}
              />
              {errors.last_name && (
                <span className="label-text-alt text-error">
                  {errors.last_name.message}
                </span>
              )}
            </div>

            <div className="form-coltrol">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>

              <input
                id="email"
                type="email"
                placeholder="name@email.com"
                className={`input input-bordered w-full `}
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="label-text-alt text-error">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="form-coltrol">
              <label className="label" htmlFor="address">
                <span className="label-text">Address</span>
              </label>

              <input
                id="address"
                type="text"
                placeholder="7/A Dhanmondi, Dhaka"
                className={`input input-bordered w-full `}
                {...register("Address")}
              />
            </div>

            <div className="form-coltrol">
              <label className="label" htmlFor="phone_number">
                <span className="label-text">Phone Number</span>
              </label>

              <input
                id="phone_number"
                type="text"
                placeholder="01*********"
                className={`input input-bordered w-full `}
                {...register("Phone Number")}
              />
            </div>

            <div className="form-coltrol">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>

              <input
                id="password"
                type="password"
                placeholder="@Da1234asf"
                className={`input input-bordered w-full `}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be atleast 8 characters",
                  },
                  // pattern: {
                  //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])/,
                  //     message: "Password must contain at least one uppercase letter, one lowercase letter, and one special character"
                  // }
                })}
              />
              {errors.password && (
                <span className="label-text-alt text-error">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="form-coltrol">
              <label className="label" htmlFor="confirm_password">
                <span className="label-text">Confirm Password</span>
              </label>

              <input
                id="confirm_password"
                type="password"
                placeholder="@Da1234asf"
                className={`input input-bordered w-full `}
                {...register("confirm_password", {
                  required: "Confirm_password is required",
                  validate: (value) =>
                    value === watch("password") || "Password do not match",
                  // pattern: {
                  //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])/,
                  //     message: "Password must contain at least one uppercase letter, one lowercase letter, and one special character"
                  // }
                })}
              />

              {errors.confirm_password && (
                <span className="label-text-alt text-error">
                  {errors.confirm_password.message}
                </span>
              )}
            </div>

            <button type="submit" className="btn btn-secondary w-full">
              Sign Up
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-base-content/70">
              Already have an account?{" "}
              <Link className="text-pink-500 font-bold">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
