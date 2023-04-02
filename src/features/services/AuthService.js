import call from '../../lib/api';

export const authUser = async (email, password) => {
    const request = {
        url: "/auth",
        data: {
            email,
            password
        }
    }
    return call('post', request);
}
    