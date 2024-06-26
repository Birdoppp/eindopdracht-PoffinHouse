import {createContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {jwtDecode} from "jwt-decode";
import axios from 'axios';
import loading from './../assets/assorted-collection/loading.gif'

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token != null) {
            const decoded = jwtDecode(token);

            void fetchUserData(decoded.sub, token);
        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, []);

    function login(JWT) {
        localStorage.setItem('token', JWT);
        const decoded = jwtDecode(JWT);

        void fetchUserData(decoded.sub, JWT, '/member');

    }

    function logout() {
        localStorage.removeItem("token");
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });

        console.log('Member logged out');
        navigate('/');
    }

    async function fetchUserData(id, token, redirectUrl) {
        try {

            const result = await axios.get(`https://api.datavortex.nl/poffinhouse/users/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    email: result.data.email
                },
                status: 'done',
            });

            if (redirectUrl) {
                navigate(redirectUrl);
            }

        } catch (e) {
            console.error(e);
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

    const contextData = {
        ...isAuth,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children :
                <p className="loading">
                    Loading...
                    <img className="loading-gif" src={loading} alt="loading"/>
                </p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;