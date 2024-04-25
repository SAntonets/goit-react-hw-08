import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setToken } from "../auth/operations";
import { useSelector } from "react-redux";
import { selectToken } from "../auth/slice";

const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

const setTokenForContacts = (token) => { instance.defaults.headers.common.Authorization = `Bearer ${token}`;};



export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await instance.get("/contacts");
        setTokenForContacts(selectToken(thunkAPI.getState()));
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
}); 

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const response = await instance.post("/contacts", contact);
        setTokenForContacts(selectToken(thunkAPI.getState()));
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        const response = await instance.delete(`/contacts/${contactId}`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})