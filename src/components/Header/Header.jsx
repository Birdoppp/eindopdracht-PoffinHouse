import {NavLink, Link} from "react-router-dom";
import './Header.css'
import MyTeam from "../MyTeam/MyTeam.jsx";
// import "berry-header" from '../';
import logo from './../../assets/assorted-collection/PixelLogoText.png'
import berry from './../../assets/dex-berry-pics/1.png'

export default function Header() {
    const activePage = ({isActive}) => isActive === true ? "active-link" : "default-link"

    return (
        <>
            <nav>
                {/*<div className="inner-container">*/}
                <Link to="/" className={activePage}>
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
                            <MyTeam classname="my-team-button"/>
                        </li>
                        <li>
                            <NavLink to="/login" className={activePage}>
                                Login
                            </NavLink>
                        </li>
                    </div>
                </ul>

            </nav>
        </>
    )
}