import { FaStar } from "react-icons/fa6";

const StarRating = () => {
    return (
        <div className="flex space-x-1 mb-2">
            {[...Array(5)].map((_,i) => {
                const value = i+1
                return(
                    <FaStar key={value} size={24} className="cursor-pointer transition-colours duration-200 text-gray-300 hover:text-yellow-300"/>
                )
            })}
        </div>
    );
};

export default StarRating;