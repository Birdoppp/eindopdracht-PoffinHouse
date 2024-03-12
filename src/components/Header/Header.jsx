import {NavLink, Link, useNavigate} from "react-router-dom";
import './Header.css'
import MyTeam from "../MyTeam/MyTeam.jsx";
// import "berry-header" from '../';
import logo from './../../assets/assorted-collection/PoffinHouse-mini-pixel.png'
import berry from './../../assets/assorted-collection/1.png'
import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import TeamDisplay from "../TeamDisplay/TeamDisplay.jsx";

export default function Header() {
    const activePage = ({isActive}) => isActive === true ? "active-link" : "default-link"
    const {isAuth, logout, user} = useContext(AuthContext);
    const navigate = useNavigate();
    const [isOpen, toggleIsOpen] = useState(false)

    const handleClickIsOpen = () => toggleIsOpen(prev => !prev)


    return (
        <>
            <nav className="nav-inner-container">
                <Link to="/" className="activePage">
                    <div className="logo">
                        <img src={berry} className='image-logo' alt='cheri-berry'/>
                        <img src={logo} className='text-logo' alt='Poffin House'/>
                    </div>
                </Link>


                <ul className="links-container">

                        <li className="page-link">
                            <NavLink to="/" className={activePage}>
                                Home
                            </NavLink>
                        </li>
                        <li className="page-link">
                            <NavLink to="/preferences" className={activePage}>
                                Preference
                            </NavLink>
                        </li>
                        <li className="team-tool-container">
                            <MyTeam classname="my-team-button" handleClick={handleClickIsOpen} isOpen={isOpen}/>
                            {user ?
                                <TeamDisplay classname="team-display" isOpen={isOpen}/>
                                :
                                <div className={`no-member-text ${isOpen ? "no-member-text--isOpen" : "no-member-text--isClosed"}`}>
                                    Please login to <br/> save your team! </div>}
                        </li>
                        <li className="page-link">
                            <NavLink to="/member" className={activePage}>
                                Member
                            </NavLink>
                        </li>

                </ul>

            </nav>
        </>
    )
}