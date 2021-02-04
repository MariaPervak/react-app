import React from 'react';
import {approveClient} from "@Components/ClientList/ClientsSlice";
import {useDispatch} from "react-redux";

import './style.scss';

const ClientApprove = ({id}) => {
    const dispatch = useDispatch();

    const setVerified = (checked, id) => {
        dispatch(approveClient({verified: checked, id : id}));
    };

    return (
        <div className="client__approve">
            <input className="client__approve-checkbox" type="checkbox" id={ id } onChange={(e) => setVerified(e.target.checked, id)}/>
            <label htmlFor={ id } className="client__approve-label"></label>
        </div>
    )
};

export default ClientApprove;