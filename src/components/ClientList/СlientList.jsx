import React, {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getClients} from '@App/model';
import {selectClients, selectOrderNumber, selectClientName} from "@Components/ClientList/ClientsSlice"
import ClientItem from '@Components/ClientItem/ClientItem';

import './style.scss';

const getFilteredElements = (clients, orderNumber, clientName) => {
	let filteredClients = clients.filter((client) =>{
		return String(client.number).indexOf(String(orderNumber)) > -1 && String(client.name).toLowerCase().indexOf(String(clientName).toLowerCase()) > -1;
	});
	return filteredClients;
}

const ClientList = () => {
	const clients = useSelector(selectClients);
	const orderNumber = useSelector(selectOrderNumber);
	const clientName = useSelector(selectClientName);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getClients())
	}, []);

	const clientsFiltered = useMemo(() => getFilteredElements(clients, orderNumber, clientName), [clients, orderNumber, clientName]);

	const clientsLength = clientsFiltered.length;
	// console.log(clientsLength);

	// const els = clientsFiltered.map((i, client) => {
	// 	const zIndex = Number(clientsLength) - Number(i);
	// 	// console.log(i)
	// 	console.log(zIndex)
	// 	console.log(client)
	// });

	const elements = clientsFiltered.map(({ id, price, company, inn, tags, tags_additional, name, number, date, verified }, i) => {
		const zIndex = Number(clientsLength) - i;
		console.log(i);
		console.log('______');
		console.log(zIndex);
		return (
			<ClientItem 
				key={id}
				id={id}
				price={price}
				company={company}
				inn={inn}
				tags={tags}
				tags_additional={tags_additional}
				name={name}
				number={number}
				date={date}
				verified={verified}
				z_index={zIndex}
			/>
		)
	});

	return	(
		<div className="client-list">
			{ elements }
		</div>
	);
};
export default ClientList;
