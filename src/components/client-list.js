import React from 'react';

import ClientItem from './client-item';

const ClientList = ({ data }) => {
	const elements = data.map((item) => {
		return (
			<ClientItem 
				key={item.id}
				id={item.id}
				price={item.price}
				company={item.company}
				inn={item.inn}
				tags={item.tags}
				tags_1={item.tags_1}
				name={item.name}
				number={item.number}
				date={item.date}
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
