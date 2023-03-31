import { Link, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { userServiceFactory } from '../../services/profileService';
import { useService } from '../../hooks/useService';

import { requestFactory } from '../../services/requester';

import { useAuthContext } from '../../contexts/AuthContext';

export const Profile = () => {
    const { userId } = useParams();
    const { userEmail, userName } = useAuthContext();


    const userService = useService(userServiceFactory);

    const baseUrl = `http://localhost:3030/users`;

    const [user, setUser] = useState({})

    
    const request = requestFactory()
    
    const getOne = async (userId) => {
        const result = request.get(`${baseUrl}/${userId}`);
        return result
    }
    
    useEffect(() => {
        getOne(userId)
        .then(result => {
            setUser(result);
        });
        
    }, [userId]);
    
    
    console.log(1111111111, user)

    return (
        <>
            <section className="wall-details">
                <div className="info-section">
                    <h1>{userName ? userName : userEmail}</h1>

                    <div className="wall-header-details">
                        <img className="wall-img-details" />
                        {/* <h1>{wall.title}</h1> */}
                        <span className="price">Email: {userEmail}</span>
                        <p className="category">Occupation: { }</p>
                    </div>

                    {/* <p className="text">
                    Description: {}
                </p> */}

                    {/* <!-- Edit/Delete buttons ( Only for creator of this wall )  --> */}
                    <div className="buttons">
                        <Link to={`/profile/editProfile`} className="buttonEdit">Edit</Link>
                        <Link className="buttonDelete" >Delete</Link>
                        {/* <Link to="#" className="button">Delete</Link> */}
                    </div>

                </div>




            </section>

        </>
    )
}