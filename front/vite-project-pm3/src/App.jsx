import Home from './view/Home/Home';
import Navbar from './view/Navbar/Navbar';
import MisTurnos from './view/MisTurnos/Misturnos';
import Login from './view/Login/Login';
import Register from './view/Resgister/Register';
import Footer from './view/Footer/Footer'
import { Route, Routes, useNavigate } from 'react-router-dom';
import TurnForm from './view/TurnForm/TurnForm';
import NotFound from './components/NotFound/NotFound';
import Contact from './view/Contact/Contact';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/user/register'  element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path='/appointments' Component={MisTurnos}  />
        <Route path='/contact' element={<Contact/>}  />
        <Route path="*" element={<NotFound /> }/>
        <Route path='/turn/schedule' element={<TurnForm />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
