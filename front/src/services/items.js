import api from 'services/api';

const resource = 'items';

const ItemService = {
	get(search = '') {
		return api.get(`${resource}?search=${search}`);
	},

	getById(id) {
		return api.get(`${resource}/${id}`);
	}
};

export default ItemService;
