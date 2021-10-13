import React from 'react';
import './Login.css';
import { auth } from "./firebase";

function Login() {
    const loginToApp = (e) => {
        e.preventDefault();


    };
    const register = () => {

    };

    return (
        <div className="login">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png"
                alt=""
            />

            <form>
                <input placeholder="Full Name ( required if registering )" type="text"/>

                <input placeholder="Profile pic URL (optional)" type="text"/>

                <input placeholder="Email" type="email"/>

                <input placeholder="Password" type="password"/>

                <button type="submit" onClick={loginToApp}> Sign In </button>

            </form>

            <p>Not a member?{""} <span className="login__register" onClick={register} >Register Now</span></p>

        </div>
    )
}

export default Login
