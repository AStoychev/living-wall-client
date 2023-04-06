import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/walls';

export const wallServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const walls = Object.values(result);
    
        return walls;
    };
    
    const getOne = async (wallId) => {
        const result = await request.get(`${baseUrl}/${wallId}`);

        let lastname = localStorage.getItem("auth");
        console.log(11111, lastname)

        console.log(result);
    
        return result
    }
    
    const create = async (wallData) => {
        const result = await request.post(baseUrl, wallData);
    
        console.log(result);
    
        return result
    };

    const edit = (wallId, data) => request.put(`${baseUrl}/${wallId}`, data);

    const deleteWall = (wallId) => request.delete(`${baseUrl}/${wallId}`);

    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteWall,
    };
}