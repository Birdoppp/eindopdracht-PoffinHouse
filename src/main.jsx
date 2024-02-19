import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom";
import App from './App.jsx'
import AuthContextProvider from "./context/AuthContext.jsx";
import TeamContextProvider from "./context/TeamContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <AuthContextProvider>
                <TeamContextProvider>
                <App/>
                </TeamContextProvider>
            </AuthContextProvider>
        </Router>
    </React.StrictMode>,
)
