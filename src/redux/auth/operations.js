import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com/",
});

export const setToken = (token) => { instance.defaults.headers.common.Authorization = `Bearer ${token}`;};

export const clearToken = () => (instance.defaults.headers.common.Authorization = "");


export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
    try {
        const response = await axios.post("/users/signup", credentials);
        setToken(response.data.token);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})

export const logIn = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
    try {
        const response = await axios.post("/users/login", credentials);
        setToken(response.data.token);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})



export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
})