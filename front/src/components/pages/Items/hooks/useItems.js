import React from 'react';
import axios from 'axios';

import { API_BASE_URL, paginationQuery } from 'utils';

const useItems = () => {
	const [items, setItems] = React.useState([]);
	const [categories, setCategories] = React.useState([]);
	const search = new URLSearchParams(window.location.search).get('search');

	React.useEffect(async () => {
		try {
			const response = await axios.get(
				`${API_BASE_URL}/items?search=${search + paginationQuery}`
			);
			setItems(response.data.items);
			setCategories(response.data.categories);
		} catch (e) {
			console.error(e);
		}
	}, [search]);

	return {
		items,
		categories
	};
};

export default useItems;
