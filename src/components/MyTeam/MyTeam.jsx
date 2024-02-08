// import Dropdown from 'react-bootstrap/Dropdown';
import {Link, NavLink} from "react-router-dom";
import TeamDisplay from "../TeamDisplay/TeamDisplay.jsx";
import './MyTeam.css'
export default function MyTeam() {

    function showDisplay (Clicked) {
    return <TeamDisplay/>
    }
        return (
            <>
                <button onClick="showDisplay()">
                    MyTeam
                </button>

                {/*<li><NavLink to="/edit-team" className="my-team-link">*/}
                {/*    MyTeam*/}
                {/*    </NavLink>*/}
                {/*</li>*/}


                {/*button to team display*/}
            </>
        );
    }

