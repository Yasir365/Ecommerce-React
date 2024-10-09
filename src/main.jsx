import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './Routes'

import store from './store/store';
import { Provider } from 'react-redux';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <Routes />
    </StrictMode>
  </Provider>
)
