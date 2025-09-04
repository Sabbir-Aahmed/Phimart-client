import React from 'react';

const ProfileButton = ({isEditing, setEditing, isSUbmitting}) => {
    return (
        <div className='flex justify-center pt-4'>
            {isEditing ? (
                <div className='space-x-4'>
                    <button 
                        type='submit'
                        className='btn btn-primary px-8'
                        disabled={isSUbmitting}
                        >
                            {isSUbmitting ? "Saving" : "Save Changes"}
                    </button>
                    <button 
                        type='submit'
                        className='btn btn-outline px-8'
                        onClick={()=>setEditing(false)}
                        >
                            Cancel
                    </button>
                </div>
            ): (
                <button 
                    type='submit'
                    className='btn btn-primary px-8'
                    onClick={()=>setEditing(true)}
                    >
                        Edit Profile
                </button>
            )}
            
        </div>
    );
};

export default ProfileButton;