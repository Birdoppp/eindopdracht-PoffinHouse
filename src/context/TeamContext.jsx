import React, { createContext, useEffect, useState } from 'react';

export const TeamContext = createContext({});

const TeamContextProvider = ({ children }) => {
    // const [team, setTeam] = useState(Array(6).fill({ name: '', nature: '' }));
    const[team, setTeam]= useState([
        {name: '' , nature: '' }, // Initial state for the first Pokémon
        {name: '' , nature: '' }, // Initial state for the second Pokémon
        {name: '' , nature: '' }, // Initial state for the third Pokémon
        {name: '' , nature: '' }, // Initial state for the fourth Pokémon
        {name: '' , nature: '' }, // Initial state for the fifth Pokémon
        {name: '' , nature: '' }])  // Initial state for the sixth Pokémon])

    useEffect(() => {
        const storedTeam = JSON.parse(localStorage.getItem("team")) || [];
        if (storedTeam.length === 6) {
            setTeam(storedTeam);
        }
        else {
            setTeam([
                {name: '' , nature: '' }, // Initial state for the first Pokémon
                {name: '' , nature: '' }, // Initial state for the second Pokémon
                {name: '' , nature: '' }, // Initial state for the third Pokémon
                {name: '' , nature: '' }, // Initial state for the fourth Pokémon
                {name: '' , nature: '' }, // Initial state for the fifth Pokémon
                {name: '' , nature: '' }])
        }
    }, []);

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