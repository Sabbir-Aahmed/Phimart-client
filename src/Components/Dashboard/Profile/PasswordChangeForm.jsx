import { useState } from "react";

const PasswordChangeForm = ({ register, errors, watch, isEditing }) => {
  const [isPasswordSectionOpen, setIsPasswordSectionPen] = useState(false);
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="mt-4">
        <button 
        type="button"
        className="btn btn-link p-0 justify-start text-primary font-semibold h-auto min-h-0"
        onClick={()=> setIsPasswordSectionPen(!isPasswordSectionOpen)}
        >Change Password</button>
      {isPasswordSectionOpen && (
        <div className="mt-3 space-y-3 pl-2 border-l-2 border-base-300">
          {/* current password */}
          <div className="form-control">
            <label className="label text-gray-500">Current Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input input-bordered bg-base-200 w-full pr-10 "
                disabled={!isEditing}
                {...register("current_password", {
                  required: "Current Password is Required",
                })}
              />
            </div>
            {errors.current_password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.current_password.message}
              </p>
            )}
          </div>

          {/* new password */}
          <div className="form-control">
            <label className="label text-gray-500">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input input-bordered bg-base-200 w-full pr-10 "
                disabled={!isEditing}
                {...register("new_password", {
                  required: "New Password is Required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
            </div>
            {errors.new_password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.new_password.message}
              </p>
            )}
          </div>

          {/* confirm new password */}
          <div className="form-control">
            <label className="label text-gray-400">Confirm New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input input-bordered bg-base-200 w-full pr-10 "
                disabled={!isEditing}
                {...register("confirm_new_password", {
                  validate: (value) =>
                    value === watch("new_password") || "Password do not match",
                })}
              />
            </div>
            {errors.confirm_new_password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirm_new_password.message}
              </p>
            )}
          </div>

          {/* show password checkbox  */}
          {isEditing && (
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Show Password</span>
                    <input type="checkbox" className="toggle" checked={showPassword} onChange={()=> setShowPassword(!showPassword)}/>
                </label>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PasswordChangeForm;
