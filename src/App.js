import './App.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './app/components/Login';
import Register from './app/components/Register';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">NVISION</Navbar.Brand>
          <Nav className="NVISION">
            <Nav.Link ><Link to="/">Login</Link></Nav.Link>
            <Nav.Link ><Link to="/register" >Register</Link></Nav.Link>
          </Nav>
        </Navbar>
        <Routes><Route exact path='/' element={< Login />}></Route>
          <Route exact path='/register' element={< Register />}></Route>
        </Routes>
      </Router>
    </div>
// import './App.css';
// import Login from './app/components/Login'


// function App() {
//   return (
//     <div className="App">
//       <Login />
//     </div>
//   );
// }
 )
  }
export default App;
