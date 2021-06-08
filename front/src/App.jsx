import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from 'components/organisms';
import { Items } from 'components/pages';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact />
				<Route path="/items" exact component={Items} />
				<Route path="/items/:id" render={() => 'Item detail'} />
			</Switch>
		</Router>
	);
}

export default App;
