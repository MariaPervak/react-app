import { configureStore } from '@reduxjs/toolkit'
import clientsReducer from "@Components/ClientList/ClientsSlice";

export default configureStore({
    reducer: {
        clients: clientsReducer
    },
})
