import React from 'react';
import { shallow } from 'enzyme';

import TextButton from '../TextButton';

describe('TextButton', () => {
	const clickHandler = jest.fn();
	const text = 'Bread';

	it('should match snapshot', () => {
		const wrapper = shallow(<TextButton clickHandler={clickHandler} text={text} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('should call changeHandler when onChange', () => {
		const wrapper = shallow(<TextButton clickHandler={clickHandler} text={text} />);
		wrapper.simulate('click');
		expect(clickHandler).toHaveBeenCalledTimes(1);
	});
});
