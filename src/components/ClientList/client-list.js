import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getClients} from '@App/model';
import ClientItem from '@Components/ClientItem/client-item';

import './style.scss';

const ClientList = () => {
	const clients = useSelector(state => state.clients.list);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getClients())
	}, []);

	const elements = clients.map(({ id, price, company, inn, tags, tags_additional, name, number, date, verified }) => {
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
