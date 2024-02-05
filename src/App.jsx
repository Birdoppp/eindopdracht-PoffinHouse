
import './App.css'
import Header from "./components/Header/Header.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Preferences from "./pages/Preferences/Preferences.jsx";
import MyTeam from "./components/MyTeam/MyTeam.jsx";
import Login from "./pages/Login/Login.jsx";


function App() {
    // const [isOpen, toggleIsOpen] = useState(true)
    // const handleClickIsOpen = () => toggleIsOpen(prev=>!prev)

    return (
        <>
           <header>
               <Header/>
           </header>

            {/*<aside*/}
            {/*    className="berry-bar">*/}
            {/*    <Aside isOpen={isOpen}/>*/}
            {/*    <Button handleClick={handleClickIsOpen} isOpen={isOpen}/>*/}
            {/*    <Container/>*/}
            {/*</aside>*/}


            <section>
             <Routes>
                 <Route index element={<Home/>}/>;
                 <Route path="/preferences" element={<Preferences/>}/>;
                 <Route path="/my-team" element={<MyTeam/>}/>;
                 <Route path="/login" element={<Login/>}/>;
             </Routes>
            </section>

            <footer>
            </footer>
        </>
    )
}


export default App