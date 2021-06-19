import React from 'react';
import axios from 'axios';

import { API_BASE_URL } from 'utils';

const useItemDetail = (id) => {
	const [itemDetail, setItemDetail] = React.useState(null);

	React.useEffect(async () => {
		try {
			const response = await axios.get(`${API_BASE_URL}/items/${id}`);
			setItemDetail(response.data.item);
		} catch (e) {
			console.error(e);
		}
	}, []);

	return itemDetail;
};

export default useItemDetail;
