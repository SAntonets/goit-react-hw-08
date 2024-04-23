/* reducer.js - файл оголошення функцій-редюсерів для оновлення стану */
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";



const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null
  },
};  

const contactsSlice = createSlice({

 name: "contacts",
 
    initialState: initialState,
  extraReducers:  (builder) => {
  builder
    .addCase(fetchContacts.pending, (state) => {
      state.contacts.loading = true;
      state.contacts.error = null;
    })
      .addCase(fetchContacts.fulfilled, (state, action) => {
    state.contacts.loading = false;
    state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
    state.contacts.loading = false;
    state.contacts.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
    state.contacts.loading = true;
    state.contacts.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
    state.contacts.loading = false;
    state.contacts.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
    state.contacts.loading = false;
    state.contacts.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
    state.contacts.loading = true;
    state.contacts.error = null;
      })
    .addCase(deleteContact.fulfilled, (state, action) => {
    state.contacts.loading = false;
    state.contacts.items = state.contacts.items.filter((contact) => contact.id !== action.payload.id);
      })
    .addCase(deleteContact.rejected, (state, action) => {
    state.contacts.loading = false;
    state.contacts.error = action.payload;
      
    })
} }, 
);



export const selectContacts = (state) => state.contacts.contacts.items;
export const selectIsLoading = (state) => state.contacts.contacts.loading;
export const selectError = (state) => state.contacts.contacts.error;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter], 
  (contacts, nameFilter) => { 
      return contacts.filter(contact => contact.name.toLowerCase().includes(nameFilter.toLowerCase()));
  }
)
export const contactsReducer = contactsSlice.reducer;
