import React from 'react';
import { shallow } from 'enzyme';

import PrimaryButton from './PrimaryButton';

describe('PrimaryButton', () => {
	const clickHandler = jest.fn();

	it('should match snapshot', () => {
		const wrapper = shallow(
			<PrimaryButton text="Compra" clickHandler={clickHandler} />
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('should call clickHandler when clicking', () => {
		const wrapper = shallow(<PrimaryButton text="Ok" clickHandler={clickHandler} />);
		wrapper.simulate('click');
		expect(clickHandler).toHaveBeenCalledTimes(1);
	});
});
