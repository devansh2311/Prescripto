import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// to handles pages, we include browserRouter 
// npm install react-router-dom
import AppContextProvider from './context/AppContext.jsx'


createRoot(document.getElementById('root')).render(
  // we remove the strictmode and instead we use the browserRouter instead
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>,
)
