import { useEffect, useState, useReducer } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { wallServiceFactory } from '../../services/wallService';
import * as commentService from '../../services/commentService';
import '../wallDetails/wallComment'
import { Popup } from '../wallDetails/wallComment';
import { useService } from '../../hooks/useService';
import { useAuthContext } from '../../contexts/AuthContext';

import { DeleteModal } from './DeleteModal';

import { AddComment } from './addComment/AddComment';

// Try comment
import { WallComment } from '../wallDetails/wallComment';
// Try comment

import { wallReducer } from '../../reducers/wallReducer';

import { useWallContext } from '../../contexts/WallContext';
import '../wallDetails/WallDetails.css';

export const WallDetails = () => {
    const { wallId } = useParams();
    const { userId, isAuthenticated, userName, userEmail } = useAuthContext();
    const { deleteWall } = useWallContext();
    // const [wall, setWall] = useState({});
    const [wall, dispatch] = useReducer(wallReducer, {});

    const wallService = useService(wallServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            wallService.getOne(wallId),
            commentService.getAll(wallId),
        ]).then(([wallData, comments]) => {
            const wallState = {
                ...wallData,
                comments,
            };

            dispatch({ type: 'WALL_FETCH', payload: wallState });

            // setWall(wallState);

            // setWall({
            //     ...wallData,
            //     comments,
            // });
        });
    }, [wallId]);

    const onCommentSubmit = async (values) => {
        const response = await commentService.create(wallId, values.comment);

        dispatch({
            type: 'COMMENT_ADD',
            payload: response,
            userName,
            userEmail,
        })
    };

    const isOwner = wall._ownerId === userId;

    return (
        <>
            <section className="wall-details">
                <div className="info-section">
                    <h1>{wall.title}</h1>

                    <div className="wall-header-details">
                        <img className="wall-img-details" src={wall.imageUrl} />
                        {/* <h1>{wall.title}</h1> */}
                        <span className="price">Price: {wall.price}</span>
                        <p className="category">Category: {wall.category}</p>
                    </div>

                    <p className="text">
                        Description: {wall.description}
                    </p>

                    {/* <!-- Bonus ( for Guests and Users ) --> */}
                    {isAuthenticated &&
                        <div className="details-comments">
                            <h2>Comments:</h2>
                            <ul>
                                {wall.comments && wall.comments.map(x => (
                                    <li key={x._id} className="comment">
                                        <p>{x.author.username ? x.author.username : x.author.email}: {x.comment}</p>
                                    </li>
                                ))}
                            </ul>

                            {!wall.comments?.length && (
                                <p className="no-comment">No comments.</p>
                            )}
                        </div>
                    }

                    {/* <!-- Edit/Delete buttons ( Only for creator of this wall )  --> */}
                    <div className="buttons">
                        {isOwner && (
                            <div>
                                <Link to={`/catalog/${wall._id}/edit`} className="buttonEdit">Edit</Link>
                                <DeleteModal />
                            </div>
                        )}
                        <div >
                            {isAuthenticated && <WallComment onCommentSubmit={onCommentSubmit} />}
                        </div>
                    </div>

                </div>

                {/* {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />} */}


            </section>

        </>
    )
}