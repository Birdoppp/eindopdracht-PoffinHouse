import './NewPassword.css';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext.jsx';

export function NewPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const { user } = useContext(AuthContext);

    const handleChangePassword = async (e) => {
        // prevents page reload
        e.preventDefault();

        if (newPassword.length < 8) {
            setErrorMessage('Password should have a minimum of 8 characters.');
            setSuccessMessage('');
            return;
        }

        if (newPassword !== confirmPassword) {
            setErrorMessage('New password and confirm password do not match.');
            setSuccessMessage('');
            return;
        }

        const token = localStorage.getItem('token');
        const username = user.username;

        try {
            await axios.put(`https://api.datavortex.nl/poffinhouse/users/${username}`, {
                password: newPassword
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            setSuccessMessage('Password changed successfully.');
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Failed to change password. Please try again later.');
            setSuccessMessage('');
        }
    };

    const handleComponentClick = () => {
        setErrorMessage('');
        setSuccessMessage('');
    };

    return (
        <div className="password-wrapper">
            <h2>Change Password</h2>
            <form autoComplete='off' onSubmit={handleChangePassword} onClick={handleComponentClick}>
                <div>
                    <label htmlFor="newPassword">New Password:</label>
                    <input className="password" type="password" id="newPassword" value={newPassword}
                           onChange={(e) => setNewPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input className="password" type="password" id="confirmPassword" value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button className="password-btn" type='submit'>Change Password</button>
            </form>
            {errorMessage && <p className="password-error">{errorMessage}</p>}
            {successMessage && <p className="password-success">{successMessage}</p>}
        </div>
    );
}

export default NewPassword;
