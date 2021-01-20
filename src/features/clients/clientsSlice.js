import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getClients = createAsyncThunk(
    'clients/getClients',
    async () => {
        return fetch(
            `https://run.mocky.io/v3/37e6f7d2-f472-47ac-b97f-f9cd3cf0e78f`
        ).then((res) => res.json())
    }
);

const clientsSlice =  createSlice({
   name: 'clients',
   initialState: {
       list: [],
       status: null
   },
   extraReducers: {
        [getClients.pending] : (state, action) => {
            state.status = 'loading'
        },
        [getClients.fulfilled] : (state, {payload}) => {
            state.list = payload;
            state.status = 'success'
        },
        [getClients.rejected] : (state, action) => {
            state.status = 'failed'
        },
   }
});

export default clientsSlice.reducer;