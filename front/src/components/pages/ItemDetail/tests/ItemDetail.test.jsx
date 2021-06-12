import React from 'react';
import { shallow } from 'enzyme';

import ItemDetail from '../ItemDetail';

describe('ItemDetail', () => {
	it('should match snapshot', () => {
		const props = { match: { params: { id: 1 } } };
		const wrapper = shallow(<ItemDetail {...props} />);
		expect(wrapper).toMatchSnapshot();
	});
});
