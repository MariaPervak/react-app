import React from "react";
import ClientList from '@Components/ClientList/client-list';
import ClientFilter from "@Components/ClientFilter/client-filter";

import './styles/App.scss';


const App = () => {
	return (
		<div className="container">
			<ClientFilter/>
			<ClientList/>
		</div>
	);
};

export default App;