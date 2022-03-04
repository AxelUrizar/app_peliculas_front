import './App.css';
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Home from './components/layouts/Home';
import SignUp from './components/pages/session/SignUp';
import LogIn from './components/pages/session/LogIn';
import Perfil from './components/pages/usuarios/Perfil';
import DetallesPrestamo from './components/pages/prestamos/DetallesPrestamo';
import ListadoPrestamos from './components/pages/prestamos/ListadoPrestamos';
import EditarPerfil from './components/pages/usuarios/EditarPerfil';
import Error404 from './components/layouts/Error404';
import EditarPrestamo from './components/pages/prestamos/EditarPrestamo';
import UsuariosAdmin from './components/pages/admins/UsuariosAdmin';
import PrestamosAdmin from './components/pages/admins/PrestamosAdmin';


function App() {
  return (
    <div className="App">
      <Routes>
        {/* Paths Principales */}
        <Route path='/' element={<Layout />}>
          <Route path='' element= {<Home/>}/>
          <Route path='signUp' element={<SignUp />} />
          <Route path='logIn' element={<LogIn />} />
          {/* <Route path='logout' element={<Logout />} /> */}

          {/* Paths Usuarios */}
          <Route path='perfil/:id' element={<Perfil />} />
          <Route path= 'perfil/:id/editarPerfil' element={<EditarPerfil />} />
          {/* <Route path='/eliminarCuenta' element={<EliminarCuenta />} /> */}

          {/* Paths Prestamos */}
          <Route path='prestamos' element={<ListadoPrestamos />}/>
          <Route path='prestamos/:id' element={<DetallesPrestamo />} />
          <Route path='prestamos/:id/editarPrestamo' element={<EditarPrestamo />} />

          {/* Paths Citas */}
          {/* <Route path='mascotas/:id/nuevaCita' element={<NuevaCita />} /> */}
          {/* <Route path='mascotas/:id/editarCita/:idCita' element={<EditarCita />} /> */}

          {/* Paths Admin */}
          <Route path='admin/usuariosAdmin' element={<UsuariosAdmin />} />
          <Route path='admin/prestamosAdmin' element={<PrestamosAdmin />} />
          
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
