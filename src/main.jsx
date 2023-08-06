import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.scss'

import App from './App.jsx'
import SignIn from './directory/SignIn'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App />}>
          <Route index element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>,
)
