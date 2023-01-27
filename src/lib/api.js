import axios from "axios";

export const get = async (request) =>{ 
    request.method = 'get';
    axios.get(request);
}
export const post = async (request) => {
    request.method = 'post';
    axios.post(request);
}
export const patch = async (request) => {
    request.method = 'patch';
    axios.patch(request);
}
export const del = async (request) => {
    request.method = 'delete';
    axios.delete(request);
}
