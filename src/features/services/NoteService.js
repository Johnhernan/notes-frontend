import call from '../../lib/api';

//Notes
export const postNote = async (UID, note) => {
    const request = {
        url: "/notes",
        data: {
           UID,
           note
        }
    };
    return call("post", request);
}

export const getNotes = async (UID) => {
    const request = {
        url: "/notes",
        data: {
            UID
        }
    };
    return call("get", request);
}
export const patchNote = async (UID, id, data) => {
    const request = {
        url: "/notes",
        data: {
            UID, id, data
        }
    };
    return await call("patch", request);
}

export const deleteNote = async (UID, id) => {
    const request = {
        url: "/notes",
        data: {
            UID, id
        }
    };
    return call("delete", request);
}

