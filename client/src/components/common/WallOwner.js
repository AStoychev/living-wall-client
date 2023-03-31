import { useParams, Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import { useWallContext } from "../../contexts/WallContext";

export const WallOwner = ({
    children,
}) => {
    const { wallId } = useParams();
    const { getWall } = useWallContext();
    const { userId } = useAuthContext();

    const currentWall = getWall(wallId);

    if (currentWall && currentWall._ownerId !== userId) {
        return <Navigate to={`/catalog/:${wallId}`} />
    }

    return children ? children : <Outlet />

};