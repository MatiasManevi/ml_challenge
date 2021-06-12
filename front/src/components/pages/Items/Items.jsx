import React from 'react';
import { Link } from 'react-router-dom';

import './Items.scss';
import { Item, BreadcrumbMenu } from 'components/organisms';
import { Content } from 'components/templates';

const Items = () => {
	return (
		<Content>
			<div className="items">
				<BreadcrumbMenu />
				<Link className="items__link" to="/items/1">
					<Item />
				</Link>
				<Link className="items__link" to="/items/2">
					<Item />
				</Link>
			</div>
		</Content>
	);
};

export default Items;
