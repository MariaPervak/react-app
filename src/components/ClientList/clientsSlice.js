import {createSlice} from "@reduxjs/toolkit";
import {getClients} from '@App/model';

const clientsSlice =  createSlice({
    name: 'clients',
    initialState: {
        initialFilterList: [],
        list: []
    },
    reducers: {
        filterClients(state, {payload}) {
            let returnState = state.list;
            if (payload.searchedValue !== ''){
                switch(payload.type) {
                    case 'number':
                        returnState = state.initialFilterList.filter((clientData) => {
                            return String(clientData.number).indexOf(String(payload.searchedValue)) > -1;
                        });
                        break;
                    case 'name':
                        returnState = state.initialFilterList.filter(function(clientData) {
                            return String(clientData.company).toLowerCase().indexOf(String(payload.searchedValue).toLowerCase()) > -1;
                        });
                        break;
                    default:
                        returnState = state.initialFilterList;
                        break
                }
            } else {
                returnState = state.initialFilterList;
            }
            state.list = returnState;
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
            state.initialFilterList = items;
        }
    },
    extraReducers: {
        [getClients.fulfilled] : (state, {payload}) => {
            state.initialFilterList = payload;
            state.list = payload;
        },
    }
});

export default clientsSlice.reducer;
export const {filterClients, approveClient} = clientsSlice.actions;