import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter  } from 'react-router-dom'
import App from './App.jsx';
import 'boxicons/css/boxicons.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
     </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
