import React from 'react';

import ItemService from 'services/items';

const useItemDetail = (id) => {
	const [itemDetail, setItemDetail] = React.useState(null);
	const [itemDetailCategories, setItemDetailCategories] = React.useState([]);

	React.useEffect(async () => {
		try {
			const response = await ItemService.getById(id);
			setItemDetail(response.item);
			setItemDetailCategories(response.categories);
		} catch (e) {
			console.error(e);
		}
	}, []);

	return { itemDetail, itemDetailCategories };
};

export default useItemDetail;
