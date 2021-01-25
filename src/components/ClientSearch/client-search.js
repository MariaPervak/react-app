import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {filterClients} from "@Components/ClientList/clientsSlice";

import './style.scss';

const ClientSearch = ({ placeholder, type }) => {
    const dispatch = useDispatch();

    const setFilter = (e, type) => {
        if (e.key === 'Enter') {
            dispatch(filterClients({searchedValue: e.target.value, type: type}));
        }
    };

    return (
        <div className="client__search">
            <FontAwesomeIcon icon={faSearch} />
            <input
                className="client__search-input"
                type="text"
                placeholder={ placeholder }
                onKeyDown={(e) => setFilter(e, type)}
            />
        </div>
    );
};

export default ClientSearch;