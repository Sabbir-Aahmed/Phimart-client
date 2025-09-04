import { useForm } from "react-hook-form";
import ProfileForm from "../Components/Dashboard/Profile/ProfileForm";
import { useState } from "react";
import ProfileButton from "../Components/Dashboard/Profile/ProfileButton";

const Profile = () => {
    const [isEditing, setEditing] = useState(false)
    const {register, formState: {errors}} = useForm()
    return (
        <div className='card w-full max-w-2xl  mx-auto bg-base-100 shadow-xl'>
            <div className='card-body'>
                <h2 className='card-title text-2xl mb-4'>Profile Informaton</h2>

                <form action="">
                    <ProfileForm register={register} errors={errors} isEditing={isEditing}/>
                    <ProfileButton isEditing={isEditing} setEditing={setEditing}/>
                </form>
            </div>
        </div>
    );
};

export default Profile;