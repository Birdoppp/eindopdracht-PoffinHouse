import "./Login.css";
import {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from './../../context/AuthContext';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {TeamContext} from "../../context/TeamContext.jsx";

function Login() {
    const {handleSubmit, register} = useForm();
    const {login} = useContext(AuthContext);
    const {setTeam} = useContext(TeamContext); // Import setTeam function

    const [error, toggleError] = useState(false);

    async function onSubmit(data) {
        console.log(data)
        toggleError(false); // Reset error state
        try {
            const source = axios.CancelToken.source();
            const result = await axios.post('https://api.datavortex.nl/poffinhouse/users/authenticate', {
                    username: data.username,
                    password: data.password
                }
                , {
                    cancelToken: source.token,
                }
            );
            const {jwt} = result.data;
            login(jwt);
            // Save initial team to local storage
            const initialTeam = Array.from({length: 6}, () => ({name: '', nature: ''}));


            if (localStorage.getItem(`team-${data.username}`)) {
                setTeam(localStorage.getItem(`team-${data.username}`))
            } else {
                localStorage.setItem(`team`, JSON.stringify(initialTeam));
            }


            // Update team context with initial team
            setTeam(initialTeam);
        } catch (e) {
            console.error("error:" + e);
            toggleError(true);
        }
    }


    return (
        <>
            <div className="login-page-wrapper">
                <h1 className="login-title">Log in</h1>

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
                    {error && <p className="error-EN">Invalid login information</p>}
                    {error && <p className="error-U">Invalid login information</p>}

                    <button type="submit" className="form-button">
                        Log in
                    </button>
                </form>

                <p>Are you not a member yet?<br/> Click <Link className="pink-link" to="/register">Here</Link> to create an account.</p>
            </div>
        </>
    );
}

export default Login;
