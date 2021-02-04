import {createSlice} from "@reduxjs/toolkit";
import {getClients} from '@App/model';

export const selectClients = state => state.clients.list;
export const selectOrderNumber = state => state.clients.orderNumber;
export const selectClientName = state => state.clients.clientName;

const clientsSlice =  createSlice({
    name: 'clients',
    initialState: {
        list: [],
        orderNumber: '',
        clientName: ''
    },
    reducers: {
        setSearchedValue(state, {payload}) {
            switch(payload.type) {
                case 'number':
                    state.orderNumber = payload.searchedValue;
                    break;
                case 'name':
                    state.clientName = payload.searchedValue;
                    break;
                default:
                    state.orderNumber = '';
                    state.clientName = '';
                    break
            }
        },
        approveClient(state, {payload}) {
            let items = [...state.list];
            let idForUpdate;
            items.forEach((currentValue, index) =>{
                if (Number(currentValue.id) === Number(payload.id)){
                    idForUpdate = index;
                }
            });
            let item = {...items[idForUpdate]};
            item.verified = payload.verified;
            items[idForUpdate] = item;
            state.list = items;
        }
    },
    extraReducers: {
        [getClients.fulfilled] : (state, {payload}) => {
            state.list = payload;
        },
    }
});

export default clientsSlice.reducer;
export const {setSearchedValue, approveClient} = clientsSlice.actions;