import React from 'react';

import ItemService from 'services/items';

const useItems = () => {
	const [items, setItems] = React.useState([]);
	const [categories, setCategories] = React.useState([]);
	const search = new URLSearchParams(window.location.search).get('search');
	const category = new URLSearchParams(window.location.search).get('category');

	React.useEffect(async () => {
		try {
			const response = await ItemService.get(search, category);
			setItems(response.items);
			setCategories(response.categories);
		} catch (e) {
			console.error(e);
		}
	}, [search, category]);

	return {
		items,
		categories
	};
};

export default useItems;
