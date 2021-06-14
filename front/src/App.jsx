import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from 'components/organisms';
import { Content } from 'components/templates';
import { Items, ItemDetail } from 'components/pages';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact component={Content} />
				<Route path="/items" exact component={Items} />
				<Route path="/items/:id" component={ItemDetail} />
			</Switch>
		</Router>
	);
}

export default App;
