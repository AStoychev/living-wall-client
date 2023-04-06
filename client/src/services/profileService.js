// Not use

import { requestFactory } from "./requester";

const baseUrl = `http://localhost:3030/users`;

export const userServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const user = Object.values(result);
    
        return user;
    };
    
    const getOne = async (userId) => {
        const result = await request.get(`${baseUrl}/${userId}`);


        // Try storage
        let lastname = localStorage.getItem("auth");
        // Try storage

        console.log(result);
    
        return result
    }
    
    const create = async (userData) => {
        const result = await request.post(baseUrl, userData);
    
        console.log(result);
    
        return result
    };
    
    // const addComment = async (wallId, data) => {
    //     const result = await request.post(`${baseUrl}/${wallId}/comments`, data);
    
    //     return result;
    // };

    const edit = (userId, data) => request.put(`${baseUrl}/${userId}`, data);

    const deleteUser = (userId) => request.delete(`${baseUrl}/${userId}`);

    return {
        getAll,
        getOne,
        create,
        edit,
        // addComment,
        delete: deleteUser,
    };
}