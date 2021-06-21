import React from 'react';
import ReactDOM from 'react-dom';

import 'index.scss';
import App from 'App';
import api from 'services/api';

api.init(
	`${window.location.protocol}//${window.location.hostname}:${window.location.port}/api/`
);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
