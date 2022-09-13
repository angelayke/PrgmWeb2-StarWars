import { createSlice } from "@reduxjs/toolkit";
import reducers from "./authReducers";

export const authSlice =  createSlice({
        name: "auth",
        initialState: {
            user: {
                name: "",
                email: "",
                id: ""
            },
        },
        reducers: reducers,
});

// On fait une destructuration de nos actions et on les exporte pour pouvoir les réutiliser dans toute notre application.
export const {
    updateEmail,
    updateName,
    updateWholeUser,
    } = authSlice.actions;

export default authSlice.reducer;
    
