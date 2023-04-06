import { useAuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';

import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
import './LoginRegister.css';

import { Link } from 'react-router-dom';

import { FullFieeldValidation } from '../../services/fullFieldValidation';

// Try errorhandling
import { AuthProvider } from '../../contexts/AuthContext';
import { authServiceFactory } from '../../services/authService';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
// Try errorhandling

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

    // Disable form
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

    // Disable form
    // const [errors, setErrors] = useState(0)
    // let { thisError } = useContext(AuthContext);
    const { thisError } = useAuthContext()
    // console.log(33333333, Object.values(thisError).length)

    // useEffect(() => {
    //     if (Object.values(thisError).length > 0) {
    //         console.log("Have error!")
    //         toast.error("Have error!")
    //         toast("Wow so easy!")
    //     }
    // })

    let count = 0
    // const onInputBlur = (e) => {
    //     count = 0
    // }

    const onClickInput = () => {
        count = 0
        return count
    }

    const checkForErrors = () => {
        if (Object.values(thisError).length > 0) {
            count = 1
            return count
        } 

        // if (count == 1) {
        //     setTimeout(() => {
        //         count - 1;
        //     }, 1000);
        //     return count
        // }
    }


    // const errorShow = () => {
    //     setTimeout(() => {
    //         setCounter(1);
    //     }, 1000);
    // }

    // console.log(33333, thisError)

    return (
        <div className="container">
            <section id="login-page" className="auth">
                <form id="login" method='POST' onSubmit={onSubmit} >

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
                            // onClick={onClickInput}
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

// ReactDOM.render(<Login />, document.getElementById('root'));