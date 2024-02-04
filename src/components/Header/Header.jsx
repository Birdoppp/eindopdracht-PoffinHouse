import {NavLink} from "react-router-dom";
import './Header.css'


export default function Header() {
const activeMenu = ({isActive}) => isActive === true ? "active-link" : "default-link"
    return(
        <>
        <div> Header </div>

        <ul>
            <li>
                <NavLink to="/" className= {activeMenu}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/preferences" className={({isActive}) => isActive === true ? "active-link" : "default-link"}>
                    Preference
                </NavLink>
            </li>
            <li>
                <NavLink to="/my-team" className={({isActive}) => isActive === true ? "active-link" : "default-link"}>
                    MyTeam
                </NavLink>
            </li>
        </ul>
        </>
    )
}