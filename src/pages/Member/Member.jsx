import './Member.css';
import {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from './../../context/AuthContext';
import axios from 'axios';
import NewPassword from "../../components/NewPassword/NewPassword.jsx";
import snackBerries from './../../assets/assorted-collection/three-poke-berries.png'

function Member() {
    const [profileData, setProfileData] = useState({});
    const {user, logout} = useContext(AuthContext);

    useEffect(() => {
        const source = axios.CancelToken.source();

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


    return (
        <div className="member-page">
            <div className="member-header">
                <h1 className="hi-member">Hi {user.username}!</h1>
                <img className="snack-berries" src={snackBerries} alt="Berries"/>
            </div>


            <section className="member-content">
                <h2>User data</h2>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </section>

            {/*{Object.keys(profileData).length > 0 &&*/}
            {/*    <section>*/}
            {/*        <h2>Profile Content</h2>*/}
            {/*        <p>{profileData.username}</p>*/}
            {/*    </section>*/}
            {/*}*/}

            <section className="password-wrapper">
                <NewPassword/>
            </section>

            <section>
                <p className="">Back to <Link to="/">Homepage</Link></p>
                <button className="logout-btn" onClick={logout}>Logout</button>
            </section>
        </div>
    );
}

export default Member;
