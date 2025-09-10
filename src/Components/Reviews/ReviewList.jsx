import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewList = ({ reviews, user, editReview, setEditReview, editingId, setEditingId, handleUpdateReview, handleDeleteReview}) => {
  return (
    <div className="flex flex-col gap-4">
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
          user={user}
          editReview={editReview}
          setEditReview={setEditReview}

          isEditing = {editingId === review.id}

          onEditClick = {() => {
            setEditingId(review.id)
            setEditReview({
                ratings: review.ratings,
                comment: review.comment
            })
          }}

          onCancelEdit = {() => setEditingId(null)}
          onSaveEdit = {handleUpdateReview}
          onDeleteClick ={() => handleDeleteReview(review.id)}
        />
      ))}
    </div>
  );
};

export default ReviewList;
