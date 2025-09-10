import React from 'react';
import { FaStar } from 'react-icons/fa6';

const ReviewCard = ({review}) => {
    return (
        <div className='card bg-base-100  shadow-md hover:shadow-lg transition-shadow border border-base-200 rounded-xl overflow-hidden'>
            <div className="card-body">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                    <div>
                        <p className='font-semibold'>{review.user.name}</p>
                        <div className="flex items-center gap-2">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_,i) => (
                                    <FaStar key={i} className={i < review.ratings ? "text-yellow-300" : "text-gray-300"} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className='btn btn-sm btn-outline btn-primary '>Edit</button>
                        <button className='btn btn-sm btn-outline btn-error '>Delete</button>
                    </div>
                </div>
                <div className="mt-4">
                    <p className='leading-relaxed whitespace-pre-line'>{review.comment}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;