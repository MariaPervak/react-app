import React, {useState} from 'react';
import ClientApprove from "@Components/ClientApprove/client-approve";
import './style.scss';

const ClientItem = ({id, price, company, inn, tags, tags_additional, name, number, date}) => {
	const [opened, setOpen] = useState(false);

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
	return (
		<article className={opened ? "client__item opened" : "client__item"}>
			<div className="client__item-inner">
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
						<p className="client__item-name"><span>{ name }</span></p>
						<p className="client__item-tags">
							{ tagsAdditionalHtml }
						</p>
					</div>
				</div>
				<div className="client__item-footer">
					<p className="client__item-number">{ number }</p>
					<p className="client__item-date">от { date }</p>
				</div>
			</div>
		</article>
	);
};

export default ClientItem;
