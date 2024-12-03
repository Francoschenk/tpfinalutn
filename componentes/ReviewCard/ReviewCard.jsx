// import React from 'react';

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

// const ReviewCard = ({ review }) => {
//   return (
//     <div className="card">
//       <h3>{review.name}</h3>
//       <p><strong>Rating:</strong> {review.score} / 10</p>
//       <p><strong>Edad:</strong> {review.age} </p>
//       <p><strong>Lugares: </strong>{review.places}</p>
//       <p><strong>Review: </strong>{review.reviewText}</p>
//       <button onClick={() => onDelete(review._id)} style={{ color: 'red' }}>
//         Eliminar
//       </button>
//     </div>
//   );
// };

// export default ReviewCard;
// import React from 'react';

// const ReviewCard = ({ review, onDelete }) => {
//   return (
//     <div className="card">
//       <h3>{review.name}</h3>
//       <p><strong>Rating:</strong> {review.score} / 10</p>
//       <p><strong>Edad:</strong> {review.age}</p>
//       <p><strong>Lugares:</strong> {review.places}</p>
//       <p><strong>Review:</strong> {review.reviewText}</p>
//       <button
//         onClick={() => onDelete(review._id)} // Aquí se utiliza la prop `onDelete`
//         style={{ color: 'red', cursor: 'pointer' }}
//       >
//         Eliminar
//       </button>
//     </div>
//   );
// };

// export default ReviewCard;
import React from 'react';
import './review.css'

const ReviewCard = ({ review, onDelete }) => {
  return (
    <div className="card">
      <h3>{review.name}</h3>
      <p><strong>Rating:</strong> {review.score} / 10</p>
      <p><strong>Edad:</strong> {review.age}</p>
      <p><strong>Lugares:</strong> {review.places}</p>
      <p><strong>Review:</strong> {review.reviewText}</p>
      <button
        onClick={() => onDelete(review._id)} // Llama a la función `onDelete`
        style={{ color: 'red', cursor: 'pointer' }}
      >
        Eliminar
      </button>
    </div>
  );
};

export default ReviewCard;

