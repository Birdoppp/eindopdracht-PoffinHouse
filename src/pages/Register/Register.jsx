import './Register.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Register() {
    const { handleSubmit, register } = useForm();
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const source = axios.CancelToken.source();

    // Cleanup function to cancel Axios requests
    useEffect(() => {
        return function cleanup() {
            source.cancel();
        };
    }, []);


    // Function to handle form submission
    async function onSubmit(data) {
        toggleError(false);
        toggleLoading(true);

        // Validate if email contains @ symbol
        if (!data.email.includes('@')) {
            setErrorMessage('Please enter a valid email address');
            toggleError(true);
            toggleLoading(false);
            return;
        }

        // Validate password length
        if (data.password.length < 8) {
            setErrorMessage('The password must be at least 8 characters long');
            toggleError(true);
            toggleLoading(false);
            return;
        }
        // Validate if all fields are filled
        if (!data.email || !data.username || !data.password) {
            setErrorMessage('Please fill in all fields');
            toggleError(true);
            toggleLoading(false);
            return;
        }

        try {
            // Send registration request
            const response = await axios.post(
                'https://api.datavortex.nl/poffinhouse/users',
                {
                    email: data.email,
                    username: data.username,
                    password: data.password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key': 'poffinhouse:Fe5GnFylcoSkSNVH3gKd',
                    },
                }
            );
            setSuccess(true);
            // Navigate to login page after 1 second
            setTimeout(() => {
                navigate('/login');
            }, 1000);
        } catch (e) {
            console.error(e);
            setErrorMessage(e.response.data);
            toggleError(true);
        }

        toggleLoading(false);
    }

    return (
        <div className="register-page-wrapper">
            <h1 className="register-title">Register</h1>

            {success ? (
                <div className="success-message">
                    <p>Registration Successful!</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email-field">
                        E-mailadres:
                        <input type="email" id="email-field" {...register('email')} />
                    </label>

                    <label htmlFor="username-field">
                        Username:
                        <input type="text" id="username-field" {...register('username')} />
                    </label>

                    <label htmlFor="password-field">
                        Password:
                        <input type="password" id="password-field" {...register('password')} />
                    </label>
                    {error && <p className="error-EN">{errorMessage}</p>}
                    {error && <p className="error-U">{errorMessage}</p>}
                    <button type="submit" className="form-button" disabled={loading}>
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>
            )}

            <p>
                Already a member? You can log in <Link to="/login">here</Link>.
            </p>
        </div>
    );
}

export default Register;
