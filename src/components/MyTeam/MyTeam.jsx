// import Dropdown from 'react-bootstrap/Dropdown';
import {Link, NavLink} from "react-router-dom";
import TeamDisplay from "../TeamDisplay/TeamDisplay.jsx";
import './MyTeam.css'
import {useState} from "react";
export default function MyTeam() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (   
        <>
            <button className="my-team-button" onClick={TeamDisplay}> My Team </button>
            {/*<TeamDisplay isOpen={modalOpen} onClose={closeModal}>*/}
            {/*    /!*<h2>Modal Content</h2>*!/*/}
            {/*    /!*<p>This is the content of the modal.</p>*!/*/}
            {/*</TeamDisplay>*/}
        </>
    );

}
