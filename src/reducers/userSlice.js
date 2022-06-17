import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {UID: "", isLoggedIn: false, notebooks: [], notes: []};

export const userSlice = createSlice({
    name: "user",
    initialState: {values: initialStateValue},
    reducers: {
        login: (state, action) => {
            const {UID, notebooks, notes} = action.payload;
            state.values = { UID, notebooks, notes, isLoggedIn: true };
        },
        logout: (state, action) => {
            state.values = initialStateValue;
        },
        refreshNotebooks: (state, action) => {
            const notebooks = action.payload.notebooks;
            state.values.notebooks = notebooks;
        },
        refreshNotes: (state, action) => {
            const notes = action.payload.notes;
            state.values.notes = notes;
        }
    },
});

export const { login, logout, refreshNotebooks, refreshNotes } = userSlice.actions;

export default userSlice.reducer; 