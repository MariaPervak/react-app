import React, {useState, useCallback} from 'react';
import ClientApprove from "@Components/ClientApprove/ClientApprove";
import './style.scss';
import {useSelector} from "react-redux";

const Highlight = ({ filter, str }) => {
	str = str.toString();

	if (!filter) return str
	const regexp = new RegExp(filter, 'ig')
	const matchValue = str.match(regexp)
	if (matchValue) {
		console.log('matchValue', matchValue)
		console.log('str.split(regexp)', str.split(regexp))
		return str.split(regexp).map((s, index, array) => {
			if (index < array.length - 1) {
				const c = matchValue.shift()
				return <>{s}<span className={'highlight'}>{c}</span></>
			}
			return s
		})
	}
	return str
}

const ClientItem = ({id, price, company, inn, tags, tags_additional, name, number, date, z_index}) => {
	const [opened, setOpen] = useState(false);
	const orderNumber = useSelector(state => state.clients.orderNumber);
	const clientName = useSelector(state => state.clients.clientName);

	const tagsHtml = tags.map((item, index) => {
		return (
			<span key={index} className="client__item-tag">{ item }</span>
		)
	});

	const tagsAdditionalHtml = tags_additional.map((item, index) => {
		return (
			<span key={index} className="client__item-tag">{ item }</span>
		)
	});

	const lightNumber = useCallback((str) => {
		return <Highlight filter={orderNumber} str={str} />
	}, [orderNumber])

	const lightName = useCallback((str) => {
		return <Highlight filter={clientName} str={str} />
	}, [clientName])

	return (
		<article className={opened ? "client__item opened" : "client__item"}>
			<div className="client__item-inner" style={{zIndex: z_index}}>
				<div className="client__item-header">
					<div className="client__item-title" onClick={() => setOpen(!opened)}>Проверить данные клиента</div>
					<ClientApprove id={ id }/>
				</div>
				<div className="client__item-body">
					<p className="client__item-price">{ price } руб.</p>
					<p className="client__item-company">{ company }</p>
					<p className="client__item-inn">ИНН { inn }</p>
					<div className="client__item-wrap">
						<div className="client__item-tags">
							{ tagsHtml }
						</div>
						<p className="client__item-name"><span>{ lightName(name) }</span></p>
						<p className="client__item-tags">
							{ tagsAdditionalHtml }
						</p>
					</div>
				</div>
				<div className="client__item-footer">
					<p className="client__item-number">{ lightNumber(number) }</p>
					<p className="client__item-date">от { date }</p>
				</div>
			</div>
		</article>
	);
};

export default ClientItem;
