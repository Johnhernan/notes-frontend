import { post, get, patch, del } from '../../lib/api';

//Notes
export const postNote = async (UID, note) => {
    const request = {
        url: "http://localhost:8000/api/notes",
        data: {
           UID,
           note
        }
    };
    return await post(request);
}

export const getNotes = async (UID) => {
    const request = {
        url: "http://localhost:8000/api/notes",
        data: {
            UID
        }
    };
    return await get(request);
}
export const patchNote = async (UID, id, data) => {
    const request = {
        url: "http://localhost:8000/api/notes",
        data: {
            UID, id, data
        }
    };
    return await patch(request);
}

export const deleteNote = async (UID, id) => {
    const request = {
        url: "http://localhost:8000/api/notes",
        data: {
            UID, id
        }
    };
    return await del(request);
}

