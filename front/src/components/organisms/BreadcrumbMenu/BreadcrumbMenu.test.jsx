import React from 'react';
import { shallow } from 'enzyme';

import BreadcrumbMenu from './BreadcrumbMenu';

describe('BreadcrumbMenu', () => {
	it('should match snapshot', () => {
		const wrapper = shallow(<BreadcrumbMenu />);
		expect(wrapper).toMatchSnapshot();
	});
});
