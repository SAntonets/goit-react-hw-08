/* reducer.js - файл оголошення функцій-редюсерів для оновлення стану */
import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, refreshUser } from "./operations";






const initialState = {
 user: {
  name: null,
  email: null,
 },
 token: null,
 isLoggedIn: false,
 isRefreshing: false,
 isError: false,
 isLoading: false,
}
;  

const authSlice = createSlice({

 name: "auth",
 
    initialState: initialState,
  extraReducers:  (builder) => {
      builder
        .addCase(refreshUser.pending, (state) => {
          state.isRefreshing = true;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
          state.user = action.payload;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        })
        .addCase(refreshUser.rejected, (state) => {
          state.isRefreshing = false;
        })
        .addCase(register.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        })
        .addCase(register.rejected, (state, action) => {
          state.user = { name: null, email: null };
          state.token = null;
          state.isLoggedIn = false;
        })  
        .addCase(register.pending, (state) => {
          state.isLoggedIn = false;
        })  
        .addCase(logIn.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        })
        .addCase(logIn.rejected, (state, action) => {
          state.user = { name: null, email: null };
          state.token = null;
          state.isLoggedIn = false;
        })
        .addCase(logIn.pending, (state) => {
          state.isLoggedIn = false;
        })
   
} }, 
);



export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const authReducer = authSlice.reducer;
