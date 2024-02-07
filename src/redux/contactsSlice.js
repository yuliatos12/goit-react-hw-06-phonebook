import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {items: []},
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload);
        },
        deleteContact(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)

        }
       
    }
  });

  
  export const { addContact, deleteContact } = contactsSlice.actions;
  export const getContacts = state => state.contacts.items;

  const persistConfig = {
    key: 'contacts',
    storage,
  }
  
  export const contactsReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
  );
 