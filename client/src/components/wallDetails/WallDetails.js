import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { wallServiceFactory } from '../../services/wallService';
import * as commentService from '../../services/commentService';
import '../wallDetails/wallComment'
import { Popup } from '../wallDetails/wallComment';
import { useService } from '../../hooks/useService';
import { useAuthContext } from '../../contexts/AuthContext';

import { AddComment } from './addComment/AddComment';

import '../wallDetails/WallDetails.css';

export const WallDetails = () => {
    const { wallId } = useParams();
    const { userId, isAuthenticated, email, userName, userEmail } = useAuthContext();
    const [wall, setWall] = useState({});

    const wallService = useService(wallServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            wallService.getOne(wallId),
            commentService.getAll(wallId),
        ]).then(([wallData, comments]) => {
            setWall({
                ...wallData,
                comments,
            });
        });
    }, [wallId]);

    const onCommentSubmit = async (values) => {
        const response = await commentService.create(wallId, values.comment);

        console.log(response);

        setWall(state => ({
            ...state,
            comments: [
                ...state.comments,
                {
                    ...response,
                    author: {
                        username: userName,
                        email: userEmail,
                    }
                }
            ],
        }));

    };



    // Pop up
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    // End Pop up

    const isOwner = wall._ownerId === userId;

    const onDeleteClick = async () => {
        await wallService.delete(wall._id);
        navigate('/catalog');
    }

    // const usernameOrEmail = () => {
    //     const username = x.author.username;
    //     const email = x.author.email;
    //     if (username) {
    //         return username;
    //     } else {
    //         return email;
    //     }
    // }

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
                    <div className="details-comments">
                        <h2>Comments:</h2>
                        <ul>
                            {wall.comments && wall.comments.map(x => (
                                <li key={x._id} className="comment">
                                    <p>{x.author.username}: {x.comment}</p>
                                </li>
                            ))}
                        </ul>

                        {!wall.comments?.length && (
                        <p className="no-comment">No comments.</p>
                    )}
                    </div>

                    {/* <!-- Edit/Delete buttons ( Only for creator of this wall )  --> */}
                    {isOwner && (
                        <div className="buttons">
                            <Link to={`/catalog/${wall._id}/edit`} className="button">Edit</Link>
                            <button className="button" onClick={onDeleteClick}>Delete</button>
                            {/* <Link to="#" className="button">Delete</Link> */}
                        </div>
                    )}

                </div>

                {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}

                {/* <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onCommentSubmit}>
                    <input type="text" name="username" placeholder='name...' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    <textarea name="comment" placeholder="Comment......" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article> */}


                {/* <div>
                <input
                    type="button"
                    value="Create"
                    onClick={togglePopup}
                />
                <div handleClose={togglePopup} />
                {isOpen && <Popup
                    content={<>
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={onCommentSubmit}>
                        <input type="text" name="username" placeholder='name...' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                        <textarea name="comment" placeholder="Comment......" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                        <input className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </article>
                </>}
                handleClose={togglePopup}
                />}
            </div> */}


            </section>

        </>
    )
}