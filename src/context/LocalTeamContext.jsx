import React, { createContext, useEffect, useState } from 'react';

export const LocalTeamContext = createContext({});

const LocalTeamContextProvider = ({ children }) => {
    const [team, setTeam] = useState(Array(6).fill({ name: '', nature: '' }));

    useEffect(() => {
        const storedTeam = JSON.parse(localStorage.getItem("team")) || [];
        if (storedTeam.length === 6) {
            setTeam(storedTeam);
        }
    }, []);

    const teamContextData = {
        team,
        setTeam
    };

    return (
        <LocalTeamContext.Provider value={teamContextData}>
            {children}
        </LocalTeamContext.Provider>
    );
};

export default LocalTeamContextProvider;