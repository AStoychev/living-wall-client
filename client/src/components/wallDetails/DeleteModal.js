import React, { useEffect, useState, useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { useService } from '../../hooks/useService';
import { wallServiceFactory } from '../../services/wallService';
import * as commentService from '../../services/commentService';

import { wallReducer } from '../../reducers/wallReducer';
import { useWallContext } from '../../contexts/WallContext';

export const DeleteModal = () => {
    const { wallId } = useParams();
    const [show, setShow] = useState(false);
    const [wall, dispatch] = useReducer(wallReducer, {});
    const wallService = useService(wallServiceFactory);
    const { deleteWall } = useWallContext();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
        });
    }, [wallId]);

    const onDeleteClick = async () => {
        await wallService.delete(wall._id);
        deleteWall(wall._id);
        navigate('/catalog');
    }

    return (
        <>
            <Link className='buttonDelete' variant="primary" onClick={handleShow}>
                Delete
            </Link>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sore yow want to delete <span style={{ color: 'rebeccapurple', fontSize: "15px", fontWeight: 'bold' }}>{wall.title}?</span></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onDeleteClick}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}