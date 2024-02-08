
import {Link, NavLink} from "react-router-dom";
export default function TeamDisplay() {

    return (
        <>
            {/* team components*/}
            <ol>

            <li>
            <NavLink to="/edit-team" className="my-team-link">
                MyTeam
            </NavLink>
            </li>
            </ol>
        {/*    Edit team button . link naar Edit Team pagina*/}
        {/*    context*/}
        </>
    );
}

