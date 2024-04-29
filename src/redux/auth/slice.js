/* reducer.js - файл оголошення функцій-редюсерів для оновлення стану */
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { register, login, refreshUser, logout } from "./operations";






const initialState = {
 user: {
  name: null,
  email: null,
 },
 token: null,
 isLoggedIn: false,
 isError: false,
 isLoading: false,
 isRefreshing: false,
}
;  

const authSlice = createSlice({

 name: "auth",
 
    initialState: initialState,
  extraReducers:  (builder) => {
      builder
      
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        })
        .addCase(refreshUser.pending, (state) => {
            state.isRefreshing = true;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.user = action.payload;
            state.isRefreshing = false;
        })
        .addCase(refreshUser.rejected, (state) => {
           state.isRefreshing = false;
        })
        .addCase(logout.fulfilled, () => {
           return initialState
        })
        .addMatcher(
          isAnyOf(register.pending, login.pending, logout.pending), (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addMatcher(
          isAnyOf(register.rejected, login.rejected, logout.rejected), (state) => {
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
export const selectIsRefreshing = (state) => state.auth.isRefreshing;


