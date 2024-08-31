import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GoogleOAuthProvider } from '@react-oauth/google';
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="238372248037-4h5b75g7n7spgmi32oj9gtbierkds2ct.apps.googleusercontent.com">...
      <App />
    </GoogleOAuthProvider>;
  </React.StrictMode>,
);
