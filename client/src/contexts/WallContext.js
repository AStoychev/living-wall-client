import { createContext, useState, useEffect, useContext } from "react";

import { useNavigate } from 'react-router-dom';
import { wallServiceFactory } from '../services/wallService'

export const WallContext = createContext();

export const WallProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [walls, setWalls] = useState([]);
    const wallService = wallServiceFactory(); //auth.accessToken

    useEffect(() => {
        wallService.getAll()
            .then(result => {
                setWalls(result)
            })
    }, []);
    
    const onCreateWallSubmit = async (data) => {
        const newWall = await wallService.create(data);

        setWalls(state => [...state, newWall])

        navigate('/catalog')
    };

    const onWallEditSubmit = async (values) => {
        const result = await wallService.edit(values._id, values);

        setWalls(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/catalog/${values._id}`)
    };

    const deleteWall = (wallId) => {
        setWalls(state => state.filter(wall => wall._id !== wallId))
    }

    const getWall = (wallId) => {
        return walls.find(wall => wall._id === wallId);
    };

    const constextValues = {
        walls,
        onCreateWallSubmit,
        onWallEditSubmit,
        deleteWall,
        getWall,
    };

    return (
        <WallContext.Provider value={constextValues}>
            {children}
        </WallContext.Provider>
    );
};

export const useWallContext = () => {
    const context = useContext(WallContext);

    return context;
};