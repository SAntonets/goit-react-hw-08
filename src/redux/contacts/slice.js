/* reducer.js - файл оголошення функцій-редюсерів для оновлення стану */
import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { selectNameFilter } from "../filters/slice";
import { logout } from "../auth/operations";



const initialState = {
  contacts: {
    items: null,
    loading: false,
    error: false,
  },
};  

const contactsSlice = createSlice({

 name: "contacts",
 
    initialState: initialState,
  extraReducers:  (builder) => {
  builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items.push(action.payload);
      })
    .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items = state.contacts.items.filter((contact) => contact.id !== action.payload.id);
    })
    .addCase(logout.fulfilled, (state) => {
       state.contacts.items = null;
       state.contacts.error = null;
       state.contacts.loading = false;
    })                
    .addMatcher(
      isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending), (state) => {
       state.contacts.loading = true;
       state.contacts.error = null;
    })
    .addMatcher(
      isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected), (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
      }
    )
} }, 
);



export const selectContacts = (state) => state.contacts.contacts.items;
export const selectIsLoading = (state) => state.contacts.contacts.loading;
export const selectError = (state) => state.contacts.contacts.error;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter], 
  (contacts, nameFilter) => {return Array.isArray(contacts) && contacts.filter(contact => contact.name.toLowerCase().includes(nameFilter.toLowerCase()));
  }
)
export const contactsReducer = contactsSlice.reducer;
