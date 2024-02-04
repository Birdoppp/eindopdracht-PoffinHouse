
import './App.css'
import Header from "./components/Header/Header.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Preferences from "./pages/Preferences/Preferences.jsx";
import MyTeam from "./components/MyTeam/MyTeam.jsx";


function App() {

    return (
        <>
           <header>
               <Header/>
           </header>

            <aside>
            </aside>

            <section>
             <Routes>
                 <Route index element={<Home/>}/>;
                 <Route path="/preferences" element={<Preferences/>}/>;
                 <Route path="/my-team" element={<MyTeam/>}/>;

             </Routes>
            </section>

            <footer>
            </footer>
        </>
    )
}


export default App