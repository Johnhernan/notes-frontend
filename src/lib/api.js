import axios from "axios";

const uri = "http://localhost:8000/api";

const call = async (method, request) => { 
    const headers = {
        'Connection': 'close',
        'X-Notetaker-UID': request.UID ?? ''
    };

    request.headers = headers;
    request.method = method.toUpperCase();
    request.url = uri + request.url;

    try {
        const res = await axios.request(request);
        return res;
    }
    catch (err) {
        return { message: err, error: true};
    }
}

export default call;