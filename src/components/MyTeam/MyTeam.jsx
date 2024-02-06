// import Dropdown from 'react-bootstrap/Dropdown';
import {Link, NavLink} from "react-router-dom";
import TeamDisplay from "../TeamDisplay/TeamDisplay.jsx";
import './MyTeam.css'
export default function MyTeam() {

        return (
            <>

                <NavLink to="/edit-team" className="my-team-link">
                    MyTeam
                </NavLink>

                {/*button to team display*/}
            </>
        );
    }

