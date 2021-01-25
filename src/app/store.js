import { configureStore } from '@reduxjs/toolkit'
import clientsReducer from "@Components/ClientList/clientsSlice";

export default configureStore({
    reducer: {
        clients: clientsReducer
    },
})
