import React from "react";
import LientList from '@Components/ClientList/СlientList';
import ClientFilter from "@Components/ClientFilter/ClientFilter";

import './styles/App.scss';


const App = () => {
	return (
		<div className="container">
			<ClientFilter/>
			<LientList/>
		</div>
	);
};

export default App;