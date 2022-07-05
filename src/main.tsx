import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
// import Provider from './context/MyProvider';
import App from './App'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)

{/* <BrowserRouter>
<Provider>
  <App />
</Provider>
</BrowserRouter>, */}
