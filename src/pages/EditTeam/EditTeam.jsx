import React from "react";
import './EditTeam.css'
import {TeamForm} from "../../components/TeamForm/TeamForm.jsx";
import blue from './../../assets/pokemon-assets/blueteam.png'


export default function EditTeam() {



    return (
        <div className="edit-page">
            <img className="team-img" src={blue} alt="Team Blue"/>
            <h1 className="edit-title">
                Enter your Pokémon Name and Nature
            </h1>

            <div className="form-team">
                <TeamForm/>
            </div>
        </div>
    )
}