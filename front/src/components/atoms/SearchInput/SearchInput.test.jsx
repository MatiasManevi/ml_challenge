import React from 'react';
import { shallow } from 'enzyme';

import SearchInput from './SearchInput';

describe('SearchInput', () => {
	const changeHandler = jest.fn();
	const value = 'input value';

	it('should match snapshot', () => {
		const wrapper = shallow(
			<SearchInput changeHandler={changeHandler} value={value} />
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('should call changeHandler when onChange', () => {
		const event = {
			target: { value }
		};
		const wrapper = shallow(
			<SearchInput changeHandler={changeHandler} value={value} />
		);
		wrapper.simulate('change', event);
		expect(changeHandler).toHaveBeenCalledTimes(1);
		expect(changeHandler).toHaveBeenCalledWith(event);
	});
});
