import request from '../../lib/api';

// Notebooks
export const postNotebook = async (UID, notebook) => {
    const request = {
        url: "/notes",
        data: {
           UID,
           notebook
        }
    };
    return await request("post", request);
}

export const getNotebooks = async (UID) => {
    const request = {
        url: "/notebooks",
        data: {
           UID
        }
    };
    return await request("get", request);
}
export const patchNotebook = async (UID, id, data) => {
    const request = {
        url: "/notebooks/n",
        data: {
           UID,
           id,
           data
        }
    };
    return await request("patch", request);
}
export const deleteNotebook = async (UID, id) => {
    const request = {
        url: "/notebooks/n",
        data: {
           UID,
           id
        }
    };
    return await request("delete", request);
}