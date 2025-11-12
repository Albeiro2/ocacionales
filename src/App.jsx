import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage/HomePage';
import Login from './components/Login/Login';
import { ToastContainer} from 'react-toastify';
import Register from './components/Register/Register';
import MenuBar from './components/Menu/MenuBar';
import Plan from './page/Plan/Plan';
import Service from './page/Service/Service';
import Contact from './page/Contact/Contact';
import About from './page/About/About';
const App = () =>{
  return(
<div>
  <MenuBar/>
  <ToastContainer/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path='/register' element={<Register/>} />
      </Routes>
     
    </div>
  );
}

export default App;