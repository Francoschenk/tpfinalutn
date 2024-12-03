import React, { useState } from 'react';
import axios from 'axios';
import './ReviewCrear.css'

const AddReviewPage = () => {
  const [reviewData, setReviewData] = useState({
    name: '',
    score: '',
    age: '',
    places: '',
    reviewtext: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = { ...reviewData };
  
    console.log('Datos enviados al backend:', payload);
  
    try {
      const response = await axios.post(
        'http://localhost:3200/api/review',
        payload,
        {
          headers: {
            'Content-Type': 'application/json', // Aseguramos el formato
          },
        }
      );
  
      if (response.status === 200 || response.status === 201) {
        alert('Reseña añadida con éxito');
        setReviewData({
          name: '',
          score: '',
          age: '',
          places: '',
          reviewtext: '',
        });
      }
    } catch (error) {
      console.error('Error al añadir la reseña:', error.response?.data || error.message);
      alert('Hubo un error al intentar añadir la reseña.');
    }
  };
  return (
    <div className="add-review-page">
      <h2>Crear Nueva Reseña</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input 
            type="text" 
            name="name" 
            value={reviewData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Puntuación (1-10):</label>
          <input 
            type="number" 
            name="score" 
            value={reviewData.score} 
            onChange={handleChange} 
            required 
            min="1" 
            max="10" 
          />
        </div>
        <div>
          <label>Edad:</label>
          <input 
            type="number" 
            name="age" 
            value={reviewData.age} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Lugares visitados:</label>
          <input 
            type="text" 
            name="places" 
            value={reviewData.places} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
            <label>Reseña:</label>
            <textarea
                name="reviewtext"
                value={reviewData.reviewtext}
                onChange={handleChange}
                required
                rows="5"
                cols="30" // Para asegurar un tamaño visible adecuado
            />
        </div>
        <button type="submit">Añadir Reseña</button>
        
      </form>
    </div>
  );
};

export default AddReviewPage;
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3200/api/review', reviewData);
//       alert('Reseña añadida con éxito');
//       setReviewData({
//         name: '',
//         score: '',
//         age: '',
//         places: '',
//         reviewtext: '',
//       }); // Limpia el formulario
//     } catch (error) {
//       console.error('Error al añadir la reseña:', error);
//       alert('Hubo un error al intentar añadir la reseña.');
//     }
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Revisa el payload antes de enviarlo
//       console.log('Enviando los datos:', reviewData);
  
//       const response = await axios.post(
//         'http://localhost:3200/api/review', 
//         reviewData, 
//         { headers: { 'Content-Type': 'application/json' } }
//       );
  
//       alert('Reseña añadida con éxito');
//       setReviewData({
//         name: '',
//         score: '',
//         age: '',
//         places: '',
//         reviewtext: '',
//       });
//     } catch (error) {
//       console.error('Error al añadir la reseña:', error);
//       alert('Hubo un error al intentar añadir la reseña.');
//     }
//   };