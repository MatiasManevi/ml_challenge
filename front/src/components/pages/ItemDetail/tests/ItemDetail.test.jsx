import React from 'react';
import { shallow } from 'enzyme';

import ItemDetail from '../ItemDetail';
import * as hooks from '../hooks';
import item from './item.fixtures';

jest.mock('../hooks');

const stateSpy = jest.spyOn(hooks, 'useItemDetail');

stateSpy.mockReturnValue(item);

describe('ItemDetail', () => {
	it('should match snapshot', () => {
		const props = { match: { params: { id: item.id } } };
		const wrapper = shallow(<ItemDetail {...props} />);
		expect(wrapper).toMatchSnapshot();
	});
});
