import React from 'react';
import ReactDOM from 'react-dom';

import 'index.scss';
import App from 'App';
import api from 'services/api';

api.init(process.env.REACT_APP_API_BASE_URL);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
