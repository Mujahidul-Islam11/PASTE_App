import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pastes: localStorage.getItem("pastes") ? JSON.parse(localStorage.getItem("pastes")): []
}

const pasteSlice = createSlice({
    name: "pasteSlice",
    initialState,
    reducers:{
        addToPastes: (state, action)=>{
            const paste = action.payload;
            state.pastes.push(paste);
            localStorage.setItem("pastes", state.pastes)
        },
        updateToPastes: (state, action)=>{

        },
        resetToPastes: (state, action)=>{

        },
        removeFromPastes: (state, action)=>{

        }
    }
})

export const {addToPastes, updateToPastes, resetToPastes,removeFromPastes} = pasteSlice.actions;
export default pasteSlice.reducer;