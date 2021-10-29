import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import clientApi from '../Common/clientApi';


const initialState = {
    clients: [{}],
    selectedClient: {}
}

export const fetchAsyncClients = createAsyncThunk('clients/fetchAsyncClients', 
    
        async ()=> {
           const response = await clientApi.get('/read');
           return response.data
        })

export const fetchAsyncClientDetails = createAsyncThunk('clients/fetchAsyncClientsDetails', 
async (_id)=> {
    console.log(_id)
    const response = await clientApi.get(`/clientDetails/?${_id}`);
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
        },
        [fetchAsyncClientDetails.fulfilled]: (state, { payload }) => {
            console.log('Success!');
            return {...state, selectedClient: payload}
         },
    }
})

export const { getClients } = clientSlice.actions;
export const getAllClients = (state) => state.clients.clients 
export const getSelectedClientDetails = (state) => state.clients.selectedClient
export default clientSlice.reducer;
