import './Register.css'
import {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import axios from 'axios';

function Register() {

    const { handleSubmit, register } = useForm();
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();


    const source = axios.CancelToken.source();

    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, []);

    async function onSubmit(data) {
        toggleError(false);
        toggleLoading(true);

        if (data.password.length < 8) {
            toggleError(true);
            toggleLoading(false);
            return;
        }

        try {
        const response =   await axios.post('https://api.datavortex.nl/poffinhouse/users', {
                email: data.email,
                username: data.username,
                password: data.password
            },{
                headers:{
                'Content-Type':'application/json',
                'X-Api-Key':'poffinhouse:Fe5GnFylcoSkSNVH3gKd'
                }
            });
            console.log(response)


            navigate('/login');
        } catch(e) {
            console.error(e);
            setErrorMessage(e.response.data);
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
                {error && <p className="error-EN">{errorMessage}</p>}
                {error && <p className="error-U">{errorMessage}</p>}
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