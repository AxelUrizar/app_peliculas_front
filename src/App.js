import './App.css';
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Home from './components/layouts/Home';
import SignUp from './components/pages/session/SignUp';
import LogIn from './components/pages/session/LogIn';
import Perfil from './components/pages/usuarios/Perfil';


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
          <Route path='perfil' element={<Perfil />} />
            {/* <Route path='/logout' element={<Logout />} /> */}
            {/* <Route path='/logoutAll' element={<LogoutAll />} /> */}
            {/* <Route path='/eliminarCuenta' element={<EliminarCuenta />} /> */}

          {/* Paths Mascotas */}
          {/* <Route path='perfil/nuevaMascota' element={<NuevaMascota />} /> */}
          {/* <Route path='perfil/listadoMascotas' element={<ListadoMascotas />}/> */}
          {/* <Route path='mascotas/:id' element={<Mascotas />} /> */}

          {/* Paths Citas */}
          {/* <Route path='mascotas/:id/nuevaCita' element={<NuevaCita />} /> */}
          {/* <Route path='mascotas/:id/editarCita/:idCita' element={<EditarCita />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
