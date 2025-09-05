import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import ErrorAlert from "../../Products/ErrorAlert";
import { useState } from "react";

const ForgotPassword = () => {
  const { forgotPassword, errorMsg } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    const response = await forgotPassword(data);
    if (response.success) {
      setMessage(response.message);
      reset();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          {message && (
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
              <span>{message}</span>
            </div>
          )}
          {errorMsg && <ErrorAlert error={errorMsg} />}

          <h2 className="card-title text-2xl font-bold">Forgot Password</h2>
          <p className="text-base-content/70 mb-4">
            Enter your email to send a reset password link
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full btn btn-secondary text-white p-2 rounded"
            >
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
