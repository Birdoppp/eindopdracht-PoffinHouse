import './Member.css';
import {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from './../../context/AuthContext';
import axios from 'axios';
import NewPassword from "../../components/NewPassword/NewPassword.jsx";
import snackBerries from './../../assets/assorted-collection/three-poke-berries.png'
import {BulbaDex, MudkipDex, PikachuDex} from "../../components/PokedexImageSlider/PokedexImageSlider.jsx";
import pixelball from './../../assets/assorted-collection/poke-ball-pixel-nbg.png'

function Member() {
    const [profileData, setProfileData] = useState({});
    const [selectedDex, setSelectedDex] = useState("");
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

    const handleDexClick = (dexName) => {
        setSelectedDex(dexName);
    };

    return (
        <div className="member-page">
            <div className="member-page-wrapper">
                <div className="starter-wrapper">
            <div className="member-header">
                <h1 className="hi-member">Hi {user.username}!</h1>
                <img className="snack-berries" src={snackBerries} alt="Berries"/>
            </div>
                    <h2>To thank you for becoming a member we would like to offer you a starter Pokémon!
                    </h2>
                    <h3>
                        Please select one below!
                    </h3>
                    <div className="starter-choice">
                        <section onClick={() => handleDexClick('BulbaDex')}>
                            <img className="pixelball" src={pixelball} alt="BulbaDex"/>
                        </section>
                        <section onClick={() => handleDexClick('MudkipDex')}>
                            <img className="pixelball" src={pixelball} alt="MudkipDex"/>
                        </section>
                        <section onClick={() => handleDexClick('PikachuDex')}>
                            <img className="pixelball" src={pixelball} alt="PikachuDex"/>
                        </section>
                    </div>
                    <div className="starter-dex">
                        {selectedDex === 'BulbaDex' && <BulbaDex/>}
                        {selectedDex === 'MudkipDex' && <MudkipDex/>}
                        {selectedDex === 'PikachuDex' && <PikachuDex/>}
                    </div>
                    {selectedDex !== "" && <h3> Try adding your Pokémon to your team!</h3>}
                </div>
                <div className="member-content">
                    <section className="member-info">
                        <h2>User data</h2>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                    </section>

                    <section className="password-wrapper">
                        <NewPassword/>
                    </section>

                    <section>
                        <p className="">Back to <Link to="/">Homepage</Link></p>
                        <button className="logout-btn" onClick={logout}>Logout</button>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Member;
