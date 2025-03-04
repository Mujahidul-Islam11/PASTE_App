import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

const pasteSlice = createSlice({
  name: "pasteSlice",
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success(`Paste created successfully`);
    },
    updateToPastes: (state, action) => {
      const paste = action.payload;
      const inx = state.pastes.findIndex((item) => item._id === paste._id);

      if (inx >= 0) {
        state.pastes[inx] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success(`Paste ${paste._id} updated`);
      }
    },
    resetToPastes: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast.success("Paste reset completed");
    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;
      const inx = state.pastes.findIndex((item) => item._id === pasteId);

      if (inx >= 0) {
        state.pastes.splice(inx, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success(`${pasteId} no. paste deleted`);
      }
    },
  },
});

export const { addToPastes, updateToPastes, resetToPastes, removeFromPastes } =
  pasteSlice.actions;
export default pasteSlice.reducer;
