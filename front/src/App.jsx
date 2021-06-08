import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from 'components/organisms';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact />
				<Route path="/items" exact render={() => 'Items result'} />
				<Route path="/items/:id" render={() => 'Item detail'} />
			</Switch>
		</Router>
	);
}

export default App;
