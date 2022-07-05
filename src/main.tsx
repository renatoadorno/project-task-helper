import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Provider }from './context/Provider';
import ReactDOM from 'react-dom/client'
import App from './App'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
)
