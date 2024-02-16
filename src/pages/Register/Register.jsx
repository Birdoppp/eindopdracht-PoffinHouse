import './Register.css'
import {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import axios from 'axios';

function Register() {
    // hookform voor het formulier
    const { handleSubmit, register } = useForm();

    // state voor functionaliteit
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const navigate = useNavigate();

    // we maken een canceltoken aan voor ons netwerk-request
    const source = axios.CancelToken.source();

    // mocht onze pagina ge-unmount worden voor we klaar zijn met data ophalen, aborten we het request
    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, []);

    async function onSubmit(data) {
        console.log(data)
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post('http://localhost:5173/register', {
                email: data.email,
                username: data.username,
                password: data.password
            },{
                cancelToken: source.token,
            });

            // als alles goed gegaan is, linken we door naar de login-pagina
            navigate('/login');
        } catch(e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);
    }

    return (
        <div className="register-page-wrapper">
            <h1>Register</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email-field">
                    E-mailadres:
                    <input
                        type="email"
                        id="email-field"
                        {...register("email")}
                    />
                </label>

                <label htmlFor="username-field">
                    Username:
                    <input
                        type="text"
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
                {error && <p className="error-EN">This account already exists. Please try a different e-mailadres.</p>}
                {error && <p className="error-U">This account already exists. Please try a different e-mailadres.</p>}
                <button
                    type="submit"
                    className="form-button"
                    disabled={loading}
                >
                    Register
                </button>

            </form>

            <p>Already a member? You can log in <Link to="/login">here</Link>.</p>
        </div>
    );
}

export default Register;