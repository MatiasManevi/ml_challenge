import React from 'react';
import { shallow } from 'enzyme';

import BreadcrumbMenu from '../BreadcrumbMenu';
import categories from './categories.fixtures';

describe('BreadcrumbMenu', () => {
	it('should match snapshot', () => {
		const wrapper = shallow(<BreadcrumbMenu categories={categories} />);
		expect(wrapper).toMatchSnapshot();
	});
});
