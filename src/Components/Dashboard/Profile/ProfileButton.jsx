import React from 'react';

const ProfileButton = ({isEditing, setEditing}) => {
    return (
        <div className='flex justify-center pt-4'>
            {isEditing ? (
                <div className='space-x-4'>
                    <button 
                        type='button'
                        className='btn btn-primary px-8'
                        >
                            Save Changes
                    </button>
                    <button 
                        type='button'
                        className='btn btn-outline px-8'
                        onClick={()=>setEditing(false)}
                        >
                            Cancel
                    </button>
                </div>
            ): (
                <button 
                    type='button'
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