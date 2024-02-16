import React, {useState} from "react";
import './EditTeam.css'
import {TeamForm} from "../../components/TeamForm/TeamForm.jsx";
import blue from './../../assets/pokemon-assets/blueteam.png'


export default function EditTeam() {
    // const [team, setTeam] = useState({})
    return (
        <>
                <img className="team-img" src={blue} alt="Team Blue"/>


                <h1 className="edit-title">
                    Enter your Pokémon Name and Nature
                </h1>

            <div className="form-team">
                <TeamForm/>

                {/*<button className="send-team"> Ready!</button>*/}
            </div>
        </>
    )
}