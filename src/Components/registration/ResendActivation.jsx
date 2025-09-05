import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';

const ResendActivation = () => {

    const {resentActivation, errorMsg} = useAuth()
    const [successMsg, setSuccessMsg] = useState("")

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async(data) => {
        const response = await resentActivation({email:data.email})
        if(response.success) setSuccessMsg(response.message)
    }

    return (
        <div className='flex min-h-screen items-center justify-center px-4 py-12 bg-base-200'>
            <div className='card w-full max-w-md bg-base-100 shadow-xl'>
                <div className='card-body'>
                    {successMsg && (
                        <div role="alert" className="alert alert-success">
                            {successMsg}
                        </div>
                    )}
                    {errorMsg && <ErrorAlert error={errorMsg} />}

                    <h2 className="card-title text-2xl font-bold">Resend Activation Email</h2>
                    <p className="text-base-content/70 mb-4">
                        Enter your email to resend the activation link
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <input 
                            type="email"
                            placeholder='Enter your email '
                            className='w-full p-2 border rounded'
                            {...register("email", {required: "Email is required"})}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}

                        <button
                            type="submit"
                            className="w-full btn btn-secondary text-white p-2 rounded"
                        >
                            Resend Activation
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResendActivation;