import { useForm } from "react-hook-form";
import ProfileForm from "../Components/Dashboard/Profile/ProfileForm";
import { useEffect, useState } from "react";
import ProfileButton from "../Components/Dashboard/Profile/ProfileButton";
import PasswordChangeForm from "../Components/Dashboard/Profile/PasswordChangeForm";
import useAuthContext from "../hooks/useAuthContext";

const Profile = () => {
    const [isEditing, setEditing] = useState(false)
    const {user, updateUserProfile} = useAuthContext()
    const {register,handleSubmit,watch,setValue, formState: {errors}} = useForm()

    useEffect(() =>{
        Object.keys(user).forEach((key) => setValue(key, user[key]))
    },[user,setValue])

    const onSubmit = async(data) =>{
       try{
         const profilePayLoad = {
            first_name: data.first_name,
            last_name: data.last_name,
            address: data.address,
            phone_number: data.phone_number
        }
        await updateUserProfile(profilePayLoad)
        alert('Profile Updated')
       }catch(error){
        console.log(error)
       }
    }
    return (
        <div className='card w-full max-w-2xl  mx-auto bg-base-100 shadow-xl'>
            <div className='card-body'>
                <h2 className='card-title text-2xl mb-4'>Profile Informaton</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <ProfileForm register={register} errors={errors} isEditing={isEditing}/>
                    <PasswordChangeForm register={register} errors={errors} isEditing={isEditing} watch={watch}/>
                    <ProfileButton isEditing={isEditing} setEditing={setEditing}/>
                </form>
            </div>
        </div>
    );
};

export default Profile;