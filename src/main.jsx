import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PrivacyPolicy from './routes/PrivacyPolicy/PrivacyPolicy.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <App />
    </div>,
  },
  {
    path: "/privacy_policy",
    element: <div>
      <PrivacyPolicy />
    </div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
