
import './App.css'
import Header from "./components/Header/Header.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Preferences from "./pages/Preferences/Preferences.jsx";
import MyTeam from "./components/MyTeam/MyTeam.jsx";
import Login from "./pages/Login/Login.jsx";
import {BerryBar} from "./components/BerryBar/BerryBar.jsx";
import BerryToggle from "./components/BerryToggle/BerryToggle.jsx";
import {useState} from "react";
import EditTeam from "./pages/EditTeam/EditTeam.jsx";
import "./fonts/fonts.css"


function App() {

    const [isOpen, toggleIsOpen] = useState(false)
    const handleClickIsOpen = () => toggleIsOpen(prev=>!prev)

    return (
        <>
           <header>
               <Header/>
           </header>

            <div className="page-wrapper">
                <BerryBar isOpen={isOpen}/>
                <BerryToggle handleClick={handleClickIsOpen} isOpen={isOpen}/>
                <section className="page">
                 <Routes>
                    <Route index element={<Home/>}/>;
                     <Route path="/preferences" element={<Preferences/>}/>;
                    <Route path="/edit-team" element={<EditTeam/>}/>;
                     <Route path="/login" element={<Login/>}/>;
                </Routes>
                 </section>
            </div>
            <footer>

            </footer>
        </>
    )
}


export default App