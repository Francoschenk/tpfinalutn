import { Link } from 'react-router-dom';
import './Bnadvar.css';


import { Navbar, Nav, NavDropdown, Button  } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

// const nombre_usuario="nombre de usuario";

import LoginPage from '../login/LoginPage';
import RegisterPage from '../registro/RegisterPage';
// import { useAuth } from '../api/AuthContext';

function Bnadvar() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [currentPage, setCurrentPage] = useState('login'); // 'login', 'register', 'reviews'

  // const handleLogin = (user) => {
  //   console.log('Usuario autenticado:', user);
  //   setIsLoggedIn(true);
  //   setCurrentPage('reviews');
  // };

  // const handleRegister = (user) => {
  //   console.log('Usuario registrado:', user);
  //   setCurrentPage('login');
  // };

  // const renderPage = () => {
  //   if (currentPage === 'login') {
  //     return <LoginPage onLogin={handleLogin} />;
  //   }
  //   if (currentPage === 'register') {
  //     return <RegisterPage onRegister={handleRegister} />;
  //   }
  // };
  // const { logout } = useAuth();

  // const handleLogout = () => {
  //   logout(); 
  //   alert('Sesión cerrada'); 
  // };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="" className='nav1'>
        <img
              src="https://i.imgur.com/nDEU5bv.jpeg"
              width="120"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Home" className='nav1'>Home</Nav.Link>
            <Nav.Link as={Link} to="/formulariol" className='nav1'>Buscador de Lugares</Nav.Link>
            <Nav.Link as={Link} to="/AboutUs" className='nav1'>Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/Cartas" className='nav1'>Lugares Recomendados</Nav.Link>
            {/* <Nav.Link as={Link} to="/comentarios" className='nav1'>Reseñas</Nav.Link> */}
            {/* <Nav.Link as={Link} to="/reviews" className='nav1'>Reseñassss</Nav.Link> */}
            <Nav.Link  as={Link} to="/Registrarse" className='nav1'>Crear cuenta</Nav.Link>
            {/* <Nav.Link  as={Link} to="/Login" className='nav1'>Login</Nav.Link> */}
            {/* <Nav.Link  as={Link} to="/Register" className='nav1'>register</Nav.Link> */}
            <Nav.Link  as={Link} to="/Logearse" className='nav1'>Login</Nav.Link>
            {/* <button onClick={handleLogout}>Cerrar sesión</button> */}
            {/* <button onClick={() => setCurrentPage('login')}>Login</button>
            <button onClick={() => setCurrentPage('register')}>Registrarse</button>
            {isLoggedIn && <button onClick={() => setIsLoggedIn(false)}>Cerrar Sesión</button>}
            {renderPage()} */}
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Bnadvar


