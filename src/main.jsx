import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './Routes'

import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/media.scss'
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
