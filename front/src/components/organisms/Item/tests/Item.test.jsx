import React from 'react';
import { shallow } from 'enzyme';

import Item from '../Item';

describe('Item', () => {
	it('should match snapshot', () => {
		const wrapper = shallow(<Item />);
		expect(wrapper).toMatchSnapshot();
	});
});
