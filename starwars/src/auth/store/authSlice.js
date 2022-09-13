import { createSlice } from "@reduxjs/toolkit";

export const authSlice =  createSlice({
        name: "auth",
        initialState: {
            user: {
                name: "",
                email: "",
                id: ""
            },
        },
        reducers: {}
});

export default authSlice.reducer;
    
