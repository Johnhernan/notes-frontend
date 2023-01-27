import { post, get } from '../../lib/api';
// User
export const createUser = async (email, password) => {
    const request = {
        url: "http://localhost:8000/api/users",
        data: {
            email,
            password
        }
    }
    return await post(request);
}

export const authUser = async (email, password) => {
    const request = {
        url: "http://localhost:8000/api/users/u",
        data: {
            email,
            password
        }
    }
    return await get(request);
}
    


