import './App.css'
import "./fonts/fonts.css"
import React, {useContext, useState} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Preferences from "./pages/Preferences/Preferences.jsx";
import EditTeam from "./pages/EditTeam/EditTeam.jsx";
import {AuthContext} from "./context/AuthContext.jsx";
import Header from "./components/Header/Header.jsx";
import BerryBar from "./components/BerryBar/BerryBar.jsx";
import BerryToggle from "./components/BerryToggle/BerryToggle.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Member from "./pages/Member/Member.jsx";
import TeamDisplay from "./components/TeamDisplay/TeamDisplay.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";


function App() {

    const {isAuth} = useContext(AuthContext);
    const [isOpen, toggleIsOpen] = useState(false)
    const handleClickIsOpen = () => toggleIsOpen(prev => !prev)

    return (
        <>
            <header className="nav-bar">
                <Header/>
            </header>

            <body className="content-wrapper">
                <aside className="berry-container">
                    <BerryBar isOpen={isOpen}/>
                    <BerryToggle handleClick={handleClickIsOpen} isOpen={isOpen}/>
                </aside>

                <main className="page">
                    <Routes>
                        <Route index element={<Home/>}/>;
                        <Route path="/preferences" element={<Preferences/>}/>;
                        <Route path="/edit-team" element={<EditTeam/>}/>;
                        <Route path="/login" element={<Login/>}/>;
                        <Route path="/register" element={<Register/>}/>;
                        <Route path="/member" element={isAuth ? <Member/> : <Navigate to="/login"/>}/>;
                        <Route path="/my-team" element={<TeamDisplay/>}/>;
                        <Route path="/*" element={<NotFound/>}/>;
                    </Routes>
                </main>
            </body>
        </>
    )
}


export default App