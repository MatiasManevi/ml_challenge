import React from 'react';
import { shallow } from 'enzyme';

import Items from './Items';

describe('Items', () => {
	it('should match snapshot', () => {
		const wrapper = shallow(<Items />);
		expect(wrapper).toMatchSnapshot();
	});
});
