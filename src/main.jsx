import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom";
import App from './App.jsx'
import AuthContextProvider from "./context/AuthContext.jsx";
import LocalTeamContextProvider from "./context/LocalTeamContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <AuthContextProvider>
                <LocalTeamContextProvider>
                <App/>
                </LocalTeamContextProvider>
            </AuthContextProvider>
        </Router>
    </React.StrictMode>,
)
