import React from 'react';
import ReviewCard from './ReviewCard';
import './ReviewPagina.css'

const ReviewsPage = ({ reviews, onDelete }) => {
  return (
    <>
    <h2>Reseñas de Viajes</h2>
    <div className="reviews-page">
      
      {reviews.map((review) => (
        <ReviewCard key={review._id} review={review} onDelete={onDelete} />
      ))}
    </div>
    </>
  );
};

export default ReviewsPage;


// import React from 'react';
// import ReviewCard from '../ReviewCard/ReviewCard';
// import AddReviewPage from './ReviewCreate';
// import axios from 'axios';

// const deleteReview = async (id) => {
//   try {
//     await axios.delete(`http://localhost:3200/api/review/${id}`);
//     alert('Reseña eliminada con éxito');
//     setReviews(reviews.filter((review) => review._id !== id));
//   } catch (error) {
//     console.error('Error al eliminar la reseña:', error);
//     alert('No se pudo eliminar la reseña.');
//   }
// };

// const ReviewsPage = ({ reviews }) => {
//   return (
//     <div className="container">
//       <h1>Reseñas</h1>
//       <div className="card-grid"> 
//         <AddReviewPage />
//         {reviews.map((review, index) => (
//           <ReviewCard key={index} review={review} onDelete={onDelete} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReviewsPage;
