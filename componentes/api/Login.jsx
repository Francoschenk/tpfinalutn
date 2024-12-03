// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import api from './api';
// import { createContext, useContext } from 'react';

// const AuthContext = createContext();
// // import { useAuth } from './AuthContext';


// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const useAuth = () => {
//     const [isAuthenticated, setIsAuthenticated] = useState(() => {
//       // Cargar el estado de autenticación desde localStorage
//       return localStorage.getItem('isAuthenticated') === 'true';
//     });
  
//     const login = () => {
//       setIsAuthenticated(true);
//       localStorage.setItem('isAuthenticated', 'true'); // Guardar en localStorage
//     };
  
//     const logout = () => {
//       setIsAuthenticated(false);
//       localStorage.removeItem('isAuthenticated'); // Eliminar de localStorage
//     };
  
//     return (
//       <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        
//       </AuthContext.Provider>
//     );
//   };
//   const { login } = useAuth(); 
//   const navigate = useNavigate(); 

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post('/users/login', { username, password });
//       console.log("estas pidiendo logearte")
//       login(); // Llama a login después de un inicio de sesión exitoso
//       navigate('/comentarios'); // Redirige a la ruta protegida
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

// export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import { useAuth } from './AuthContext'; // Importa el hook del contexto
// import api from './api'; // Asegúrate de que api esté configurado correctamente

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useAuth(); // Obtén el método login del contexto
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Solicitud al backend
//       const response = await api.post('/users/login', { username, password });

//       if (response.status === 200) {
//         console.log('Inicio de sesión exitoso:', response.data);
//         login(); // Cambia el estado a autenticado
//         navigate('/comentarios'); // Redirige a la ruta protegida
//       }
//     } catch (error) {
//       console.error('Error en el inicio de sesión:', error);
//       alert('Error en el inicio de sesión. Verifica tus credenciales.');
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

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from './AuthContext'; // Importa correctamente
import api from './api';
import './Login.css';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // Asegúrate de que este hook esté disponible
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/users/login', { username, password });

      if (response.status === 200) {
        login(); // Cambia el estado a autenticado
        navigate('/comentarios'); // Redirige a la ruta protegida
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      alert('Error en el inicio de sesión. Verifica tus credenciales.');
    }
  };
  const handleGoToSignUp = () => {
    navigate('/Registrarse'); // Redirige a la página de registro
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
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
      <div className="registro-link">
        <p>¿No tienes una cuenta? <button type="button" onClick={handleGoToSignUp}>Crear cuenta</button></p>
      </div>
    </form>
  );
};

export default Login;
