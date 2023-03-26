import React from 'react';
import { useContext } from 'react';

import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

import '../login/LoginRegister.css';

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',

    }, onRegisterSubmit);

    return (
        <div className="container">
            <section id="register-page" className="content auth">
                <form id="register" method='POST' onSubmit={onSubmit}>
                    <div className="container">
                        {/* <div className="brand-logo"></div> */}
                        <h1>Register</h1>
                        <div className='field-register'>

                            <label className='htmlContent' htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="livingwall@gmail.com"
                                value={values.email}
                                onChange={changeHandler}
                            />

                            <label className='htmlContent' htmlFor="username">Username:</label>
                            <input
                                type="username"
                                id="username"
                                name="username"
                                placeholder="Username"
                                value={values.username}
                                onChange={changeHandler}
                            />

                            <label className='htmlContent' htmlFor="pass">Password:</label>
                            <input
                                type="password"
                                name="password"
                                id="register-password"
                                placeholder="******"
                                value={values.password}
                                onChange={changeHandler}
                            />

                            <label className='htmlContent' htmlFor="con-pass">Confirm Password:</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="******"
                                value={values.confirmPassword}
                                onChange={changeHandler}
                            />


                            <input className="submit-btn" type="submit" value="Register" />

                        </div>

                        <p className="down-field">
                            <span>If you already have profile click <Link id="fieldHere" to="/login">HERE</Link></span>
                        </p>
                    </div>
                </form>
            </section>
        </div>
    );
}