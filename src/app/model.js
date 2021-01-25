import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getClients = createAsyncThunk(
    'clients/getClients',
    async (dispatch) => {
        const response = await axios.get('https://run.mocky.io/v3/e3000b7e-f7d1-4164-b402-383f4b1e2088');
        return response.data;
    }
);