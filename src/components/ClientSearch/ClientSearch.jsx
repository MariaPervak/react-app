import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {setSearchedValue} from "@Components/ClientList/ClientsSlice";

import './style.scss';

const ClientSearch = ({ placeholder, type }) => {
    const dispatch = useDispatch();

    const setFilter = (e, type) => {
        dispatch(setSearchedValue({searchedValue: e.target.value, type: type}));
    };

    return (
        <div className="client__search">
            <FontAwesomeIcon icon={faSearch} />
            <input
                className="client__search-input"
                type="text"
                placeholder={ placeholder }
                onChange={(e) => setFilter(e, type)}
            />
        </div>
    );
};

export default ClientSearch;