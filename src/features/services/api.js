import axios from 'axios';
require("dotenv").config();

// User
export const createUser = async (email, password) => 
    axios.post(`${process.env.API_ROUTE}/users`, {email, password});

export const authUser = async (email, password) => 
    axios.get(`${process.env.API_ROUTE}/users/u`, {params: {email, password}});

// Notebooks
export const postNotebook = (UID, notebook) => 
    axios.post(`${process.env.API_ROUTE}/notebooks`, {UID, notebook});

export const getNotebooks = (UID) => 
    axios.get(`${process.env.API_ROUTE}/notebooks`, {params: {UID}});

export const patchNotebook = (UID, id, data) => 
    axios.patch(`${process.env.API_ROUTE}/${id}`, {UID, id, data});

export const deleteNotebook = (UID, id) => 
    axios.delete(`${process.env.API_ROUTE}/notebooks/$ id}`, {params: {UID, id}});

//Notes
export const postNote = (UID, note) => 
    axios.post(`${process.env.API_ROUTE}/notes`, {UID, note});

export const getNotes = (UID) => 
    axios.get(`${process.env.API_ROUTE}/notes`, {params: {UID}});

export const patchNote = (UID, id, data) => 
    axios.patch(`${process.env.API_ROUTE}/${id}`, {UID, id, data});

export const deleteNote = (UID, id) => 
    axios.delete(`${process.env.API_ROUTE}/notes/${id}`, {params: {UID, id}});
