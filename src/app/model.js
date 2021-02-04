import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {urls} from "@App/urls";

export const getClients = createAsyncThunk(
    'clients/getClients',
    async (dispatch) => {
        const response = await axios.get(urls.mocky);
        return response.data;
    }
);