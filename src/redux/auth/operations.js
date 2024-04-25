import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const setToken = (token) => { instance.defaults.headers.common.Authorization = `Bearer ${token}`;};

export const clearToken = () => (instance.defaults.headers.common.Authorization = "");


export const register = createAsyncThunk("auth/register", async (formData, thunkAPI) => {
    try {
        const { data } = await axios.post("/users/signup", formData);
        setToken(data.token);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})

export const logIn = createAsyncThunk("auth/login", async (formData, thunkAPI) => {
    try {
        const { data } = await axios.post("/users/login", formData);
        setToken(data.token);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    try {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        setToken(token);
        const { data } = await instance.get("/users/current");
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})

