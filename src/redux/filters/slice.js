/* reducer.js - файл оголошення функцій-редюсерів для оновлення стану */
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    filter: "",
};  

const filtersSlice = createSlice({

 name: "filter",
 
    initialState: initialState,
 
 reducers: {
     changeFilter(state, action) {
       state.filter = action.payload;
     },
 },
});



export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filter.filter;
export const filtersReducer = filtersSlice.reducer;
































/* reducers: {
 deleteContact: (state, action) => {
  state.contacts = state.contacts.filter(el => [el.id]('http://el.id/>) !== action.payload>')
 },
 addContact: (state, action) => {
  state.contacts = [...state.contacts, action.payload]
 },
},




Слайс фільтра

У файлі filtersSlice.js оголоси слайс фільтра, використовуючи функцію createSlice().



Екшени слайса для використання в dispatch:

changeFilter - зміна значення фільтра в властивості name


Оголоси функції-селектори для використання в useSelector:

selectNameFilter - повертає значення фільтра з властивості name.


З файла слайса експортуй редюсер, а також його екшени і селектори. */