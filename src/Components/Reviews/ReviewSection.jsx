
import { useParams } from 'react-router';
import ReviewForm from './ReviewForm';
import authApiClient from '../../Services/auth-api-client';
import { useEffect, useState } from 'react';
import ReviewList from './ReviewList';
import { LuNotepadText } from 'react-icons/lu';
import apiClient from '../../Services/api-client';


const ReviewSection = () => {
    const {productId} = useParams()
    const [reviews, setReviews] = useState([])
    const [userCanReview, setUserCanReview] = useState(false)
    
    const fetchReviews = async() => {
        try{
            const response = await apiClient.get(`/products/${productId}/reviews/`)
            setReviews(response.data)
        }catch(error){
            console.log(error)
        }
    }
    const onSubmit = async(data) => {
        try{
            const response = await authApiClient.post(`/products/${productId}/reviews/`,data)
            console.log(response.data)
            fetchReviews();
        }catch(error){
            console.log(error)
        }
    }

    const checkUserPermission = async() => {
        try{
            const response = await authApiClient.get(`/orders/has_ordered/${productId}/`)
            setUserCanReview(response.data.hasordered)
            console.log("checkUserPermission response:", response.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        checkUserPermission()
        fetchReviews()
    },[])
    return (
        <div className='space-y-8 mt-10 max-w-5xl mx-auto px-4'>
            <div className="flex items-center justify-between">
                <h2 className='text-2xl font-bold'>Customer Reviews</h2>
                <div className="badge bade-lg">1 Review</div>
            </div>

            {userCanReview && (
                <div className="card bg-base-100 shadow-lg border border-base-200 rounded-xl overflow-hidden">
                    <div className="card-body">
                        <h3 className='card-title text-lg'>Write a Review</h3>
                        <ReviewForm onSubmit={onSubmit}/>
                    </div>
                </div>
            )}

            <div className="driver"></div>

            <div className="flex flex-col items-center justify-center text-center py-8">
                <div className="text-pink-500 text-5xl mb-4"><LuNotepadText /></div>
                <h3 className='text-xl font-semibold mb-2'>No Reviews Yet</h3>
                <p className='text-base-content/70'>Be the first to review this product</p>
            </div>

            <ReviewList reviews={reviews}/>
        </div>
    );
};

export default ReviewSection;