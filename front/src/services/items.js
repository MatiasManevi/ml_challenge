import api from 'services/api';
import { paginationQuery } from 'utils';

const resource = 'items';

const ItemService = {
	get(search = '', category) {
		const queryString = category ? `?category=${category}` : `?search=${search}`;
		return api.get(`${resource + queryString + paginationQuery}`);
	},

	getById(id) {
		return api.get(`${resource}/${id}`);
	}
};

export default ItemService;
