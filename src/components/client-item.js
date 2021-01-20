import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import regeneratorRuntime from "regenerator-runtime";

const ClientItem = (props) => {
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	const cls = ['client-list__item'];
	if (open){
		cls.push('opened');
	}

	function setOpened() {
		setOpen(prevState => !prevState);
	}

	const tags = props.tags.map((item, index) => {
		return (
			<div key={index} className="client-list__item-tag">{ item }</div>
		)
	});

	const tags_1 = props.tags_1.map((item, index) => {
		return (
			<div key={index} className="client-list__item-tag">{ item }</div>
		)
	});

	return	(
		<div className={cls.join(' ')} onClick={setOpened}>
			<div className="client-list__item-inner">
				<div className="client-list__item-header">
					<div className="client-list__item-title">Проверить данные клиента</div>
					<input type="checkbox" id={ props.id }/>
					<label htmlFor={ props.id }></label>
				</div>
				<div className="client-list__item-body">
					<div className="client-list__item-price">{ props.price } руб.</div>
					<div className="client-list__item-company">{ props.company }</div>
					<div className="client-list__item-inn">ИНН { props.inn }</div>
					<div className="client-list__item-wrap">
						<div className="client-list__item-tags">
							{ tags }
						</div>
						<div className="client-list__item-name"><span>{ props.name }</span></div>
						<div className="client-list__item-tags">
							{ tags_1 }
						</div>
					</div>
				</div>
				<div className="client-list__item-footer">
					<div className="client-list__item-number">{ props.number }</div>
					<div className="client-list__item-date">от { props.date }</div>
				</div>
			</div>
		</div>
	);
};

export default ClientItem;
