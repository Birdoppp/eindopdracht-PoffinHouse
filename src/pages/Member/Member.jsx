import './Member.css';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../context/AuthContext';
import axios from 'axios';

function Member() {
    const [profileData, setProfileData] = useState({});
    const { user, logout } = useContext(AuthContext);

    useEffect(() => {
        const source = axios.CancelToken.source();
        console.log(user.username);

        async function fetchProfileData() {
            const token = localStorage.getItem('token');
            const username = user.username;

            try {
                const result = await axios.get(`https://api.datavortex.nl/poffinhouse/users/${username}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    cancelToken: source.token,
                });

                console.log(result);
                setProfileData(result.data);
            } catch (e) {
                if (axios.isCancel(e)) {
                    console.log("Request canceled", e.message);
                } else {
                    console.error(e);
                }
            }
        }

        if (user.username) {
            void fetchProfileData();
        }

        return () => {
            source.cancel();
        };
    }, [user.username]);

    useEffect(() => {
        console.log(profileData);
    }, [profileData]);

    return (
        <>
            <h1>Hi {user.username}!</h1>
            <section className="member-content">
                <h2>User data</h2>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </section>

            {Object.keys(profileData).length > 0 &&
                <section>
                    <h2>Profile Content</h2>
                    <p>{profileData.username}</p>
                </section>
            }
            <p>Back to <Link to="/">Homepage</Link></p>
            <button onClick={logout}>Logout</button>
        </>
    );
}

export default Member;
