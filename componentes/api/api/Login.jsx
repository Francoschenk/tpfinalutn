import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import api from './api';
import { useAuth } from './AuthContext'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users/login', { username, password });
      login(); // Llama a login después de un inicio de sesión exitoso
      navigate('/protegida'); // Redirige a la ruta protegida
    } catch (error) {
      alert('Error en el inicio de sesión: ' + error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import api from './api';
// import { useAuth } from './AuthContext'; 

// const LoginDB = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useAuth(); 
//   const navigate = useNavigate(); 

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post('/users/login', { username, password });
//       login(); // Llama a login después de un inicio de sesión exitoso
//       navigate('/protegida'); // Redirige a la ruta protegida
//     } catch (error) {
//       alert('Error en el inicio de sesión: ' + error.response.data);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Iniciar Sesión</h2>
//       <input
//         type="text"
//         placeholder="Nombre de usuario"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Contraseña"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit">Iniciar Sesión</button>
//     </form>
//   );
// };

// export default LoginDB;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {useAuth} from '../Api/AuthContext'
// import './Login.css';

// function LoginDB() {
//     const [formData, setFormData] = useState({
//         username: '',
//         password: '',
//     });
//     const navigate = useNavigate(); // Para redirigir al usuario después de iniciar sesión

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Validación de los campos
//         if (!formData.username || !formData.password) {
//             alert('Por favor, completa todos los campos.');
//             return;
//         }

//         try {
//             // Enviar los datos al backend para iniciar sesión
//             const response = await fetch('http://localhost:5000/api/users/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (!response.ok) {
//                 throw new Error('Error al iniciar sesión');
//             }

//             const data = await response.json();
//             console.log(data); // Respuesta del backend

//             // Si todo va bien, redirigir al usuario a otra página (por ejemplo, al dashboard)
//             alert('Inicio de sesión exitoso');
//             navigate('/comentarios'); // Cambia la ruta de redirección según lo que necesites
//         } catch (error) {
//             console.error('Error al iniciar sesión:', error);
//             alert('Hubo un error al iniciar sesión. Intenta de nuevo.');
//         }
//     };

//     return (
//         <div className="login-container">
//             <h1>Iniciar Sesión</h1>
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="username">Correo Electrónico:</label>
//                     <input
//                         type="text"
//                         id="username"
//                         name="username"
//                         placeholder="Ingresa tu correo"
//                         value={formData.username}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Contraseña:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         placeholder="Ingresa tu contraseña"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="button">Iniciar sesión</button>
//             </form>
//             <div className="registro-link">
//                 <p>¿No tienes una cuenta? <a href="/registro">Regístrate aquí</a></p>
//             </div>
//         </div>
//     );
// }

// export default LoginDB;







// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import api from './api';
// import { useAuth } from './AuthContext'; 


// const LoginDB = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useAuth(); 
//   const navigate = useNavigate(); 

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post('/users/login', { username, password });
//       login(); // Llama a login después de un inicio de sesión exitoso
//       navigate('/protegida'); // Redirige a la ruta protegida
//     } catch (error) {
//       alert('Error en el inicio de sesión: ' + error.response.data);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Iniciar Sesión</h2>
//       <input
//         type="text"
//         placeholder="Nombre de usuario"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Contraseña"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit">Iniciar Sesión</button>
//     </form>
//   );
// };

// export default LoginDB;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {useAuth} from '../Api/AuthContext'
// import './Login.css';

// function LoginDB() {
//     const [formData, setFormData] = useState({
//         username: '',
//         password: '',
//     });
//     const navigate = useNavigate(); // Para redirigir al usuario después de iniciar sesión

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Validación de los campos
//         if (!formData.username || !formData.password) {
//             alert('Por favor, completa todos los campos.');
//             return;
//         }

//         try {
//             // Enviar los datos al backend para iniciar sesión
//             const response = await fetch('http://localhost:5000/api/users/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (!response.ok) {
//                 throw new Error('Error al iniciar sesión');
//             }

//             const data = await response.json();
//             console.log(data); // Respuesta del backend

//             // Si todo va bien, redirigir al usuario a otra página (por ejemplo, al dashboard)
//             alert('Inicio de sesión exitoso');
//             navigate('/comentarios'); // Cambia la ruta de redirección según lo que necesites
//         } catch (error) {
//             console.error('Error al iniciar sesión:', error);
//             alert('Hubo un error al iniciar sesión. Intenta de nuevo.');
//         }
//     };

//     return (
//         <div className="login-container">
//             <h1>Iniciar Sesión</h1>
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="username">Correo Electrónico:</label>
//                     <input
//                         type="text"
//                         id="username"
//                         name="username"
//                         placeholder="Ingresa tu correo"
//                         value={formData.username}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Contraseña:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         placeholder="Ingresa tu contraseña"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="button">Iniciar sesión</button>
//             </form>
//             <div className="registro-link">
//                 <p>¿No tienes una cuenta? <a href="/registro">Regístrate aquí</a></p>
//             </div>
//         </div>
//     );
// }

// export default LoginDB;

