import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import ClientList from './components/client-list';
import { getClients } from "./features/clients/clientsSlice";

import './styles/App.scss';


const App = () => {
	const clients = useSelector(state => state.clients.list);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getClients())
	}, [dispatch]);

	return (
		<div className="container">
			<ClientList
				data = { clients }/>
		</div>
	);
};

export default App;




// import React from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import {increment, decrement} from "./toolkitRedux/toolkitSlice"
// import { getClients } from "./features/clients/clientsSlice";
//
// import ClientList from './components/client-list';
//
// import './styles/App.scss';
//
// const App = () => {
//
// 	const count = useSelector(state => state.toolkit.count);
// 	const clients = useSelector(state => state.toolkit.clients);
// 	const dispatch = useDispatch();
// 	dispatch(getClients());
//
// 	return (
// 		<div className="container">
// 			<h1> Счетчик {count} </h1>
// 			<button onClick={() => dispatch(increment())}>Инкремент</button>
// 			<button onClick={() => dispatch(decrement())}>Декремент</button>
// 			<ClientList data = { clients }/>
// 		</div>
// 	);
// };
//
// export default App;