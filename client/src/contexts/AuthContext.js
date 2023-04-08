import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

import { authServiceFactory } from '../services/authService';

// Handling
// Handling

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    // Try error
    const [errors, setError] = useState({});
    const [errorEmail, setErrorEmail] = useState({});
    // Try error

    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            setAuth(result);
            navigate('/catalog');

        } catch (error) {
            console.log('There is a problem')
            if (error) {
                setError(error)
                setTimeout(() => {
                    setError({});
                }, 2000);
            }

        }
    };


    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        if (confirmPassword !== registerData.password) {
            return;
        }

        try {
            const result = await authService.register(registerData);

            setAuth(result);

            navigate('/catalog');

        } catch (error) {
            console.log('There is a problem')
            if (error) {
                setErrorEmail(error)
                setTimeout(() => {
                    setErrorEmail({})
                }, 2000);
            }

        }

    };

    const onLogout = async () => {
        await authService.logout();

        setAuth({});

        // Try logout
        localStorage.removeItem('auth');
        // Try logout
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        userName: auth.username,
        isAuthenticated: !!auth.accessToken,

        thisError: errors,
        errorEmail: errorEmail,
    };
    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

// not necessary

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};