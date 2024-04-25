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
 isError: false,
 isLoading: false,
}
;  

const authSlice = createSlice({

 name: "auth",
 
    initialState: initialState,
  extraReducers:  (builder) => {
      builder
        .addCase(register.pending, (state) => {
          state.isLoading = true;
          state.isError = false;
        }) 
        .addCase(register.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isLoggedIn = true;
          state.user = action.payload.user;
          state.token = action.payload.token;
        })
        .addCase(register.rejected, (state) => {
          state.isLoading = false;
          state.isError = true;
        })  
        .addCase(logIn.pending, (state) => {
          state.isLoading = true;
          state.isError = false;
        }) 
        .addCase(logIn.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isLoggedIn = true;
          state.user = action.payload.user;
          state.token = action.payload.token;
        })
        .addCase(logIn.rejected, (state) => {
          state.isLoading = false;
          state.isError = true;
        })
        .addCase(refreshUser.pending, (state) => {
          state.isLoading = true;
          state.isError = false;
        }) 
        .addCase(refreshUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isLoggedIn = true;
          state.user = action.payload;
        })
        .addCase(refreshUser.rejected, (state) => {
          state.isLoading = false;
          state.isError = true;
        })
    
    
    
} }, 
);

export const authReducer = authSlice.reducer;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectIsError = (state) => state.auth.isError;


