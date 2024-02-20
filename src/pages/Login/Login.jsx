import "./Login.css"
import {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../context/AuthContext';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import Register from "../Register/Register.jsx";

function Login() {
    const { handleSubmit, register } = useForm();

    const [error, toggleError] = useState(false);
    const { login } = useContext(AuthContext);

    const source = axios.CancelToken.source();

    // mocht onze pagina ge-unmount worden voor we klaar zijn met data ophalen, aborten we het request
    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, []);

    async function onSubmit(data) {
        toggleError(false);

        try {
            const result = await axios.post('https://api.datavortex.nl/poffinhouse/users/authenticate', {
                username: data.username,
                password: data.password
            },{
                cancelToken: source.token,
            });
            // log het resultaat in de console
            console.log(result.data);

            // geef de JWT token aan de login-functie van de context mee
            login(result.data.jwt);

        } catch(e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
            <div className="login-page-wrapper">

            <h1>Login</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username-field">
                    Username:
                    <input
                        type="username"
                        id="username-field"
                        {...register("username")}
                    />
                </label>

                <label htmlFor="password-field">
                    Password:
                    <input
                        type="password"
                        id="password-field"
                        {...register("password")}
                    />
                </label>
                {error && <p className="error-EN">Combination of the e-mailadres and password are invalid</p>}
                {error && <p className="error-U">Combination of the e-mailadres and password are invalid</p>}

                <button
                    type="submit"
                    className="form-button"
                >
                    Inloggen
                </button>
            </form>

            <p>Are you not a member yet? Click <Link to="/register">here</Link> to create an account.</p>
            </div>
        </>
    );
}

export default Login;