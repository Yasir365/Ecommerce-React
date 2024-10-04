import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './Routes'

import 'react-image-gallery/styles/css/image-gallery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'
import store from './store/store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <Routes />
    </StrictMode>
  </Provider>
)
