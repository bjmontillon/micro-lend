import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    clients: [{}]
}

export const fetchAsyncClients = createAsyncThunk('clients/fetchAsyncClients', 
        async ()=> {
           const response = await axios.get('https://localhost:3001/read');
           return response.data
        })



const clientSlice = createSlice({
    name: "clients",
    initialState,
    reducer: {
        getClients: (state, { payload }) => { 
            state.clients = payload;
        }
    },
    extraReducers: {
        [fetchAsyncClients.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncClients.fulfilled]: (state, { payload }) => {
           console.log('Success!');
           return {...state, clients: payload}
            
        },
        [fetchAsyncClients.rejected]: () => {
            console.log("Rejected!");
        }
    }
})

export const { getClients } = clientSlice.actions;
export const getAllClients = (state) => state.clients.clients 
export default clientSlice.reducer;
