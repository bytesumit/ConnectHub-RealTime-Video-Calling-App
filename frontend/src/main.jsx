import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { AuthProvider } from './AuthContext.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { CookiesProvider } from 'react-cookie'; 

createRoot(document.getElementById('root')).render(
    <CookiesProvider>
        <AuthProvider>
            <App />
    </AuthProvider>
 </CookiesProvider>

)


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { BrowserRouter} from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// <React.StrictMode>
// <BrowserRouter>
// <App />
// </BrowserRouter>
// </React.StrictMode>
// );
