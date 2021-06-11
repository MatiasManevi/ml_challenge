import React from 'react';
import { Link } from 'react-router-dom';

import './Items.scss';
import { Item } from 'components/organisms';
import { Content } from 'components/templates';

const Items = () => {
	return (
		<Content>
			<div style={{ paddingBottom: '16px', paddingTop: '16px' }}>Breadcrumb</div>
			<Link className="link" to="/items/1">
				<Item />
			</Link>
			<Link className="link" to="/items/2">
				<Item />
			</Link>
			<Link className="link" to="/items/3">
				<Item />
			</Link>
		</Content>
	);
};

export default Items;
