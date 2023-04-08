import { useEffect, useReducer } from 'react';
import { useParams, Link } from 'react-router-dom';

import { wallServiceFactory } from '../../services/wallService';
import * as commentService from '../../services/commentService';
import '../wallDetails/wallComment'
import { useService } from '../../hooks/useService';
import { useAuthContext } from '../../contexts/AuthContext';
import { DeleteModal } from './DeleteModal';
import { wallReducer } from '../../reducers/wallReducer';

// Try comment
import { WallComment } from '../wallDetails/wallComment';
// Try comment

import '../wallDetails/WallDetails.css';

export const WallDetails = () => {
    const { wallId } = useParams();
    const { userId, isAuthenticated, userName, userEmail } = useAuthContext();
    const [wall, dispatch] = useReducer(wallReducer, {});

    const wallService = useService(wallServiceFactory);

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
                    <div className="buttonsEditDelete">
                        {isOwner && (
                            <div>
                                <Link to={`/catalog/${wall._id}/edit`} className="buttonEdit">Edit</Link>
                                <DeleteModal />
                            </div>
                        )}
                    </div>

                    <h1>{wall.title}</h1>

                    <div className="wall-header-details">
                        <img className="wall-img-details" src={wall.imageUrl} />
                        <span className="price">Price: {wall.price}</span>
                        <p className="category">Category: {wall.category}</p>
                    </div>

                    <p className="text">
                        Description: {wall.description}
                    </p>

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
                                <p className="no-comment">No comments yet.</p>
                            )}
                        </div>
                    }

                    <div className="buttons">
                        {/* {isOwner && (
                            <div>
                                <Link to={`/catalog/${wall._id}/edit`} className="buttonEdit">Edit</Link>
                                <DeleteModal />
                            </div>
                        )} */}
                        <div >
                            {isAuthenticated && <WallComment onCommentSubmit={onCommentSubmit} />}
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}