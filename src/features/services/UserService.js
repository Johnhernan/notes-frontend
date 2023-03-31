import call from '../../lib/api';
// User
export const createUser = async (email, password) => {
    const request = {
        url: "/users",
        data: {
            email,
            password
        }
    }
    return await call('post', request);
}

export const authUser = async (email, password) => {
    const request = {
        url: "/users/u",
        data: {
            email,
            password
        }
    }
    const res = call('get', request);
    return res;
}
    


