import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <img
                src="https://brandlogos.net/wp-content/uploads/2017/01/linkedin-logo-512x512.png"
                alt=""
            />

            <form>
                <input placeholder="Full Name ( required if registering )" type="text"/>

                <input placeholder="Profile pic URL (optional)" type="text"/>

                <input placeholder="Email" type="text"/>

                <input placeholder="Password" type="password"/>

            </form>

        </div>
    )
}

export default Login
