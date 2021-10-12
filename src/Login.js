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
                <input placeholder="Full Name ( required if registering )" type=""/>
            </form>
        </div>
    )
}

export default Login
