
import { useParams } from 'react-router';
import ReviewForm from './ReviewForm';
import authApiClient from '../../Services/auth-api-client';
import { useEffect, useState } from 'react';


const ReviewSection = () => {
    const {productId} = useParams()
    const [userCanReview, setUserCanReview] = useState(false)
    
    const onSubmit = async(data) => {
        try{
            const response = await authApiClient.post(`/products/${productId}/reviews/`,data)
            console.log(response.data)
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
    },[])
    return (
        <div>
            {userCanReview && <ReviewForm onSubmit={onSubmit}/>}
        </div>
    );
};

export default ReviewSection;