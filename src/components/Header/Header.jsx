import {NavLink} from "react-router-dom";
import './Header.css'
import MyTeam from "../MyTeam/MyTeam.jsx";


export default function Header() {
const activeMenu = ({isActive}) => isActive === true ? "active-link" : "default-link"

    return(
        <>
       <nav>
           <ul>
                {/*<div className="inner-container">*/}
            <li>
                <NavLink to="/" className="NavLink">
                    Home
                </NavLink>
            </li>
                {/*</div>*/}
             <div className="inner-container2">
            <li>
                <NavLink to="/preferences" className="NavLink">
                    Preference
                </NavLink>
            </li>
                 <li>
                     <MyTeam/>
                 </li>
            <li>
                {/*<NavLink to="/my-team" className="NavLink">*/}
                {/*    MyTeam*/}
                {/*</NavLink>*/}
            </li>
               <li>
                   <NavLink to="/login" className="NavLink">
                       Login
                   </NavLink>
               </li>
             </div>
        </ul>
       </nav>
        </>
    )
}