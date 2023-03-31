// Not use
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { useService } from '../../hooks/useService';
import { userServiceFactory } from '../../services/profileService';
// import { wallServiceFactory } from '../../services/wallService';

export const EditProfile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const onUserEditSubmit = async (values) => {
        const result = await userServiceFactory.edit(values._id, values);

        setUser(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/profile`)
    };
    
    // const { onWallEditSubmit } = useAuthContext(); <--- onUserEditSubmit
    const { authId } = useParams();
    const userService = useService(userServiceFactory);
    console.log("asaasasasasas", authId)
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        email: '',
        username: '',
        imageUrl: '',
        description: '',
    }, onUserEditSubmit);

    useEffect(() => {
        userService.getOne(authId)
            .then(result => {
                changeValues(result);
            });
    }, [authId]);

    return (
        <div className="container">
            <section id="register-page" className="content auth">
                <form id="register" method='POST' onSubmit={onSubmit}>
                    <div className="container">
                        {/* <div className="brand-logo"></div> */}
                        <h1>Edit</h1>
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

                            <label className='htmlContent' htmlFor="imageUrl">ImageUrl:</label>
                            <input
                                type="imageUrl"
                                id="imageUrl"
                                name="imageUrl"
                                placeholder="http://"
                                value={values.imageUrl}
                                onChange={changeHandler}
                            />

                            <label className='htmlContent' htmlFor="description">Description:</label>
                            <input
                                type="description"
                                name="description"
                                id="description"
                                placeholder="Description"
                                value={values.confirmPassword}
                                onChange={changeHandler}
                            />


                            <input className="submit-btn" type="submit" value="Edit" />

                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}