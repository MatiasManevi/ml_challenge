import React from 'react';
import ReactDOM from 'react-dom';

import 'index.scss';
import App from 'App';
import api from 'services/api';
import { API_BASE_URL } from 'utils';

api.init(API_BASE_URL);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
