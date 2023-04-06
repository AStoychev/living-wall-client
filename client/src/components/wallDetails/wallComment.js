// Not use

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



import { useForm } from "../../hooks/useForm";

export const WallComment = ({
    onCommentSubmit,
}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { values, changeHandler, onSubmit } = useForm({
        comment: ''
    }, onCommentSubmit);
    return (
        <>
            <Link className='buttonComment' variant="primary" onClick={handleShow}>
                Comment
            </Link>
            <Modal show={show} onHide={handleClose}>
                < article className="create-comment" >
                    <Button className='closeButtonX' variant="secondary" onClick={handleClose}>
                        X
                    </Button>
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={onSubmit}>
                        <textarea name="comment" placeholder="Comment......" value={values.comment} onChange={changeHandler}></textarea>
                        <input className="btn submit" style={{ backgroundColor: "#7a7ef0" }} type="submit" value="Add Comment" onClick={handleClose}/>
                    </form>
                </article >
            </Modal>
        </>
    );
};