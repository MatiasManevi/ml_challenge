import axios from 'axios';

const api = {
	init(baseURL) {
		axios.defaults.baseURL = baseURL;
		axios.defaults.headers.common['content-type'] = 'application/json';
		axios.defaults.headers.common['Accept'] = 'application/json';
		axios.defaults.timeout = 30000;
		axios.interceptors.response.use((response) => response.data);
	},

	get(resource) {
		return axios.get(resource);
	},

	post(resource, data) {
		return axios.post(resource, data);
	},

	put(resource, data) {
		return axios.put(resource, data);
	},

	patch(resource, data) {
		return axios.patch(resource, data);
	}
};

export default api;
