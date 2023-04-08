import { useAuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';

import React from 'react';
import './LoginRegister.css';

import { Link } from 'react-router-dom';

// Try error handling
import 'react-toastify/dist/ReactToastify.css';
// Try error handling

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};

export const Login = () => {
    const { onLoginSubmit } = useAuthContext();
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',

    }, onLoginSubmit);

    const isRequired = []
    const items = (Object.values(values));

    const isFull = () => {
        if (isRequired.length === items.length) {
            return true
        } else {
            return false
        }
    }

    for (let i = 0; i < items.length; i++) {
        if ((items[i].length) > 0) {
            isRequired.push(1)
        }
    }

    const { thisError } = useAuthContext()

    let count = 0

    const checkForErrors = () => {
        if (Object.values(thisError).length > 0) {
            count = 1
            return count
        } 
    }

    return (
        <div className="container">
            <section id="login-page" className="auth">
                <form id="login" method='POST' onSubmit={onSubmit} >

                    <div style={{ color: "red" }} className="container">
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
                        <label>
                            {checkForErrors() === 1 ?
                                <span style={{ fontSize: "20px", fontWeight: "bold", color: "red", margin: "8%", paddingLeft: "11.5%" }}>Email or password don't match!</span>
                                :
                                <span></span>
                            }
                        </label>

                        {isFull() === true ?
                            <input type="submit" className="submit-btn" value="Login"/>
                            :
                            <input className="submit-disabled" type="submit" value="Login" title="You have to fill all fields!" disabled />
                        }

                        <p className="down-field">
                            <span>If you don't have profile click <Link id="fieldHere" to="/register">HERE</Link></span>
                        </p>
                    </div>
                </form>
            </section>
        </div>
    );
}