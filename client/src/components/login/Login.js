import { useAuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';

import React from 'react';
// import ReactDOM from 'react-dom/client';
import './LoginRegister.css';

import { Link } from 'react-router-dom';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export const Login = () => {
    const { onLoginSubmit } = useAuthContext();
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);

    return (
        <div className="container">
            <section id="login-page" className="auth">
                <form id="login" method='POST' onSubmit={onSubmit}>

                    <div style={{ color: "red" }} className="container">
                        {/* <div className="brand-logo"></div> */}
                        <h1>Login</h1>
                        <label className='htmlContent' htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="livingwall@gmail.com"
                            name={LoginFormKeys.Email}
                            value={values[LoginFormKeys.Email]}
                            onChange={changeHandler}
                        />

                        <label className='htmlContent' htmlFor="login-pass">Password:</label>
                        <input
                            type="password"
                            id="login-password"
                            placeholder="******"
                            name={LoginFormKeys.Password}
                            value={values[LoginFormKeys.Password]}
                            onChange={changeHandler}
                        />

                        <input type="submit" className="submit-btn" value="Login" />
                        <p className="down-field">
                            <span>If you don't have profile click <Link id="fieldHere" to="/register">HERE</Link></span>
                        </p>
                    </div>
                </form>
            </section>
        </div>
    );
}

// ReactDOM.render(<Login />, document.getElementById('root'));