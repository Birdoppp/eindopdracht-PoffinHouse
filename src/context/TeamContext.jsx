import React, {createContext, useContext, useEffect, useState} from 'react';
import {AuthContext} from "./AuthContext.jsx";

export const TeamContext = createContext({});

const TeamContextProvider = ({ children }) => {
    const {user} = useContext(AuthContext);
    // const [team, setTeam] = useState(Array(6).fill({ name: '', nature: '' }));
    const[team, setTeam]= useState([
        {name: '' , nature: '' }, // Initial state for the first Pokémon
        {name: '' , nature: '' }, // Initial state for the second Pokémon
        {name: '' , nature: '' }, // Initial state for the third Pokémon
        {name: '' , nature: '' }, // Initial state for the fourth Pokémon
        {name: '' , nature: '' }, // Initial state for the fifth Pokémon
        {name: '' , nature: '' }])  // Initial state for the sixth Pokémon])

    // useEffect(() => {
    //     const storedTeam = JSON.parse(localStorage.getItem(`team-${user.username}`)) || [];
    //     if (storedTeam.length === 6) {
    //         setTeam(storedTeam);
    //     }
    //     else {
    //         setTeam([
    //             {name: 'Bulbasaur' , nature: '' }, // Initial state for the first Pokémon
    //             {name: '' , nature: '' }, // Initial state for the second Pokémon
    //             {name: '' , nature: '' }, // Initial state for the third Pokémon
    //             {name: '' , nature: '' }, // Initial state for the fourth Pokémon
    //             {name: '' , nature: '' }, // Initial state for the fifth Pokémon
    //             {name: '' , nature: '' }])
    //     }
    // }, []);

    useEffect(() => {
        console.log(team)
    }, [team]);

    const teamContextData = {
        team,
        setTeam
    };

    return (
        <TeamContext.Provider value={teamContextData}>
            {children}
        </TeamContext.Provider>
    );
};

export default TeamContextProvider;