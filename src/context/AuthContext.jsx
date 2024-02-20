import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from "jwt-decode";
import axios from 'axios';

export const AuthContext = createContext( {} );

function AuthContextProvider( { children } ) {
    const [ isAuth, toggleIsAuth ] = useState( {
        isAuth: false,
        user: null,
        status: 'pending',
    } );
    const navigate = useNavigate();

    // const localTeam = JSON.parse(localStorage.getItem("team"))
    // const[team, setTeam]= useState([
    //     { name: '' || localTeam[0].name, nature: '' || localTeam[0].nature }, // Initial state for the first Pokémon
    //     { name: '' || localTeam[1].name, nature: '' || localTeam[1].nature }, // Initial state for the second Pokémon
    //     { name: '' || localTeam[2].name, nature: '' || localTeam[2].nature }, // Initial state for the third Pokémon
    //     { name: '' || localTeam[3].name, nature: '' || localTeam[3].nature }, // Initial state for the fourth Pokémon
    //     { name: '' || localTeam[4].name, nature: '' || localTeam[4].nature }, // Initial state for the fifth Pokémon
    //     { name: '' || localTeam[5].name, nature: '' || localTeam[5].nature }])  // Initial state for the sixth Pokémon])

    // MOUNTING EFFECT
    useEffect( () => {
        // haal de JWT op uit Local Storage
        const token = localStorage.getItem( 'token' );

        // als er WEL een token is, haal dan opnieuw de gebruikersdata op
        if ( token ) {
            const decoded = jwtDecode( token );
            void fetchUserData( decoded.sub, token );
        } else {
            // als er GEEN token is doen we niks, en zetten we de status op 'done'
            toggleIsAuth( {
                isAuth: false,
                user: null,
                status: 'done',
            } );
        }
    }, [] );

    function login( JWT ) {
        // zet de token in de Local Storage
        localStorage.setItem( 'token', JWT );
        // decode de token zodat we de ID van de gebruiker hebben en data kunnen ophalen voor de context
        const decoded = jwtDecode( JWT );

        // geef de ID, token en redirect-link mee aan de fetchUserData functie (staat hieronder)
        void fetchUserData( decoded.sub, JWT, '/profile' );
        // link de gebruiker door naar de profielpagina
        // navigate('/profile');
    }

    function logout() {
        localStorage.clear();
        toggleIsAuth( {
            isAuth: false,
            user: null,
            status: 'done',
        } );

        console.log( 'Gebruiker is uitgelogd!' );
        navigate( '/' );
    }

    // Omdat we deze functie in login- en het mounting-effect gebruiken, staat hij hier gedeclareerd!
    async function fetchUserData( id, token, redirectUrl ) {
        try {
            // haal gebruikersdata op met de token en id van de gebruiker
            const result = await axios.get( `http://localhost:5173/600/users/${ id }`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${ token }`,
                },
            } );

            // zet de gegevens in de state
            toggleIsAuth( {
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                },
                status: 'done',
            } );

            // als er een redirect URL is meegegeven (bij het mount-effect doen we dit niet) linken we hiernnaartoe door
            // als we de history.push in de login-functie zouden zetten, linken we al door voor de gebuiker is opgehaald!
            if ( redirectUrl ) {
                navigate( redirectUrl );
            }

        } catch ( e ) {
            console.error( e );
            toggleIsAuth( {
                isAuth: false,
                user: null,
                status: 'done',
            } );
        }
    }

    const contextData = {
        ...isAuth,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={ contextData }>
            { isAuth.status === 'done' ? children : <p>Loading...</p> }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;