import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './Routes'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <Routes />
  </StrictMode>
)
