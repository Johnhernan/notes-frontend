import axios from 'axios';
const url = 'http://localhost:8000/api';
// const headers = {
//     "Content-type": "application/json"
// };

// User
export const createUser = async (email, password) => 
    axios.post(`${url}/users`, {email, password});

export const authUser = async (email, password) => 
    axios.get(`${url}/users/u`, {params: {email, password}});

// Notebooks
export const postNotebook = (UID, notebook) => 
    axios.post(`${url}/notebooks`, {UID, notebook});

export const getNotebooks = (UID) => 
    axios.get(`${url}/notebooks`, {params: {UID}});

export const patchNotebook = (UID, id, data) => 
    axios.patch(`${url}/${id}`, {UID, id, data});

export const deleteNotebook = (UID, id) => 
    axios.delete(`${url}/notebooks/$ id}`, {params: {UID, id}});

//Notes
export const postNote = (UID, note) => 
    axios.post(`${url}/notes`, {UID, note});

export const getNotes = (UID) => 
    axios.get(`${url}/notes`, {params: {UID}});

export const patchNote = (UID, id, data) => 
    axios.patch(`${url}/${id}`, {UID, id, data});

export const deleteNote = (UID, id) => 
    axios.delete(`${url}/notes/${id}`, {params: {UID, id}});
