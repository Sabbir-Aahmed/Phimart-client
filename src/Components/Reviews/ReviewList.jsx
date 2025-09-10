import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewList = ({reviews}) => {
    return (
        <div className='flex flex-col gap-4'>
            {reviews.map((review) => (
                <ReviewCard key={review.id} review={review}/>
            ))}
        </div>
    );
};

export default ReviewList;