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
    const { isAuth, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isOpen, toggleIsOpen] = useState(false)
    const handleClickIsOpen = () => toggleIsOpen(prev => !prev)


    return (
        <>
            <nav>
                {/*<div className="inner-container">*/}
                <Link to="/" className="activePage">
                    <div className="logo">
                    <img src={berry} className='image-logo' alt='cheri-berry'/>
                    <img src={logo} className='text-logo' alt='Poffin House' />
                    </div>
                </Link>

                {/*</div>*/}
                {/*<li className="berrie">*/}
                {/*    <img className="header-berries" src={berries}/>*/}
                {/*</li>*/}

                <ul className="links-container">
                    <div className="inner-container2">
                        {/*<li>*/}
                        {/*    <img className="header-berries" src={berries}/>*/}
                        {/*</li>*/}
                        <li>
                            <NavLink to="/" className={activePage}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/preferences" className={activePage}>
                                Preference
                            </NavLink>
                        </li>
                        <li>
                            <MyTeam classname="my-team-button" handleClick={handleClickIsOpen} isOpen={isOpen}/>
                            <TeamDisplay isOpen={isOpen}/>
                        </li>
                        <li>
                            <NavLink to="/member" className={activePage}>
                                Member
                            </NavLink>
                        </li>
                    </div>
                </ul>

            </nav>
        </>
    )
}