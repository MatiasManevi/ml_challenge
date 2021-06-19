import React from 'react';

import { paginationQuery } from 'utils';
import ItemService from 'services/items';

const useItems = () => {
	const [items, setItems] = React.useState([]);
	const [categories, setCategories] = React.useState([]);
	const search = new URLSearchParams(window.location.search).get('search');

	React.useEffect(async () => {
		try {
			const response = await ItemService.get(search + paginationQuery);
			setItems(response.items);
			setCategories(response.categories);
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
