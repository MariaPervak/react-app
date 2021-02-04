import React from 'react';
import ClientSearch from "@Components/ClientSearch/ClientSearch";
import './style.scss';

const ClientFilter = () => {
    return (
        <div className="client__filter">
            <ClientSearch placeholder="Номер заявки" type="number"/>
            <ClientSearch placeholder="Наименование клиента" type="name"/>
        </div>
    );
};

export default ClientFilter;