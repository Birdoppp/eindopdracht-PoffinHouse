import React, {useContext, useState} from 'react';
import {AuthContext} from "../../context/AuthContext.jsx";
import axios from "axios";

export function NewPassword() {

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const {user} = useContext(AuthContext);

    const handleChangePassword = async () => {
        if (!newPassword || !confirmPassword) {
            setErrorMessage('Please enter a new password and confirm it.');
            return;
        }

        if (newPassword !== confirmPassword) {
            setErrorMessage('New password and confirm password do not match.');
            return;
        }

        if (newPassword.length < 8) {
            setErrorMessage('Password should have a minimum of 8 characters.');
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
        }
    };

    return (
        <div className="password-wrapper">
            <h2>Change Password</h2>
            <div>
                <label htmlFor="newPassword">New Password:</label>
                <input type="password" id="newPassword" value={newPassword}
                       onChange={(e) => setNewPassword(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" value={confirmPassword}
                       onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>
            <button className="password-btn" onClick={handleChangePassword}>Change Password</button>
            {errorMessage && <p className="password-error">{errorMessage}</p>}
            {successMessage && <p className="pasword-success">{successMessage}</p>}
        </div>
    );
}

export default NewPassword;