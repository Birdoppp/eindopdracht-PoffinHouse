import {NavLink} from "react-router-dom";
import './Header.css'


export default function Header() {
const activeMenu = ({isActive}) => isActive === true ? "active-link" : "default-link"

    return(
        <>
       <nav>
           <ul>
            <li>
                <NavLink to="/" className= {activeMenu}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/preferences" className={activeMenu}>
                    Preference
                </NavLink>
            </li>
            <li>
                <NavLink to="/my-team" className={activeMenu}>
                    MyTeam
                </NavLink>
            </li>
        </ul>
       </nav>
        </>
    )
}