import './Member.css';
import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {AuthContext} from './../../context/AuthContext';
import NewPassword from "../../components/NewPassword/NewPassword.jsx";
import {PokedexImageSlider} from "../../components/PokedexImageSlider/PokedexImageSlider.jsx";
import snackBerries from './../../assets/assorted-collection/three-poke-berries.png'
import pixelball from './../../assets/assorted-collection/poke-ball-pixel-nbg.png'
import {bulbaImages, mudkipImages, pikachuImages} from "../../constants/dexConstants.jsx";
import charmander from './../../assets/pokemon-assets/charmander.png'

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

        // Load selectedDex from local storage if it exists
        const savedChoice = localStorage.getItem(`selectedDex-${user.username}`);
        if (savedChoice) {
            setSelectedDex(savedChoice);
        }

        return () => {
            source.cancel();
        };
    }, [user.username]);

    const handleDexClick = (dexName) => {
        setSelectedDex(dexName);
        // Save the choice in Local Storage
        localStorage.setItem(`selectedDex-${user.username}`, dexName);
    };

    return (
        <div className="member-page">
                <div className="starter-wrapper">
                    <header className="member-header">
                        <h1 className="hi-member">Hi {user.username}!</h1>
                        <img className="snack-berries" src={snackBerries} alt="Berries"/>
                    </header>
                    {selectedDex === "" &&
                        <section>
                            <h2 className="chose-text">To thank you for becoming a member we would like to offer you a starter Pokémon!
                            </h2>
                            <h3>
                                Please select one below!
                            </h3>
                        </section>
                    }

                    <ul className="starter-choice">
                        <li onClick={() => handleDexClick('Bulbasaur')}>
                            <img className="pixelball" src={pixelball} alt="Bulbasaur"/>
                        </li>
                        <li onClick={() => handleDexClick('Mudkip')}>
                            <img className="pixelball" src={pixelball} alt="Mudkip"/>
                        </li>
                        <li onClick={() => handleDexClick('Pikachu')}>
                            <img className="pixelball" src={pixelball} alt="Pikachu"/>
                        </li>
                    </ul>
                    {selectedDex !== "" &&
                        <h3 className="chose-text">
                            You chose {selectedDex}!
                        </h3>
                    }

                    <div className="starter-dex">
                        {selectedDex === 'Bulbasaur' &&
                            <PokedexImageSlider className="member-dex" pokedexImages={bulbaImages}/>}
                        {selectedDex === 'Mudkip' &&
                            <PokedexImageSlider className="member-dex" pokedexImages={mudkipImages}/>}
                        {selectedDex === 'Pikachu' &&
                            <PokedexImageSlider className="member-dex" pokedexImages={pikachuImages}/>}
                    </div>
                    {selectedDex && <>
                        <h3 className="starter-text"> Try adding your Pokémon to your team! </h3>
                        <p>Find the nature of your Pokémon in the trainers memo</p>
                    </>
                    }
                </div>


                <div className="member-content">
                    <section className="member-info">
                        <img className="charmander" src={charmander} alt="Charmander"/>
                        <h2>User data</h2>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                    </section>
                    <section className="password-wrapper">
                        <NewPassword/>
                    </section>
                    <section>
                        <p className="">Back to <Link to="/" className="homepage-link">Homepage</Link></p>
                        <button className="logout-btn" onClick={logout}>Logout</button>
                    </section>
                </div>
        </div>
    );
}

export default Member;
