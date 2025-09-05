import { useNavigate, useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import ErrorAlert from "../../Products/ErrorAlert";

const ResetPassword = () => {
  const { uid, token } = useParams();
  const { resetPassword, errorMsg } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await resetPassword({
      uid,
      token,
      new_password: data.new_password,
    });

    if (response.success) {
      alert(response.message);
      setTimeout(() => navigate("/login"), 3000);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          {errorMsg && <ErrorAlert error={errorMsg} />}

          <h2 className="card-title text-2xl font-bold">Reset Password</h2>
          <p className="text-base-content/70 mb-4">Enter your new password</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* New Password */}
            <div>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full p-2 border rounded"
                {...register("new_password", {
                  required: "New password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              {errors.new_password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.new_password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <input
                type="password"
                placeholder="Confirm new password"
                className="w-full p-2 border rounded"
                {...register("confirm_password", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />
              {errors.confirm_password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirm_password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full btn btn-secondary text-white p-2 rounded"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
