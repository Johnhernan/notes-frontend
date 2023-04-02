import axios from "axios";

const uri = "http://localhost:8000/api";

const call = async (method, request) => { 
    const headers = {
        'X-Notetaker-UID': request.UID ?? '',
        // x-access-token: [header].[payload].[signature]
    };

    request.headers = headers;
    request.method = method.toUpperCase();
    request.baseURL = uri;

    try {
        const res = await axios(request);
        return res;
    }
    catch (err) {
        return { message: err, error: true};
    }
}

export default call;