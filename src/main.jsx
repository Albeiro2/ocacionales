import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { HashRouter } from 'react-router-dom' // Importa HashRouter en lugar de BrowserRouter [web:1]


createRoot(document.getElementById('root')).render(
  <HashRouter>
   <App />
  </HashRouter>
   
)
