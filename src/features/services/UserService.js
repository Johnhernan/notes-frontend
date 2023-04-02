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
    return call('post', request);
}
