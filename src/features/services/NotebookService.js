import { post, get, patch, del } from '../../lib/api';

// Notebooks
export const postNotebook = async (UID, notebook) => {
    const request = {
        url: "http://localhost:8000/api/notes",
        data: {
           UID,
           notebook
        }
    };
    return await post(request);
}

export const getNotebooks = async (UID) => {
    const request = {
        url: "http://localhost:8000/api/notebooks",
        data: {
           UID
        }
    };
    return await get(request);
}
export const patchNotebook = async (UID, id, data) => {
    const request = {
        url: "http://localhost:8000/api/notebooks/n",
        data: {
           UID,
           id,
           data
        }
    };
    return await patch(request);
}
export const deleteNotebook = async (UID, id) => {
    const request = {
        url: "http://localhost:8000/api/notebooks/n",
        data: {
           UID,
           id
        }
    };
    return await del(request);
}