import React from 'react';
import { Link } from 'react-router-dom';

import './Items.scss';
import { Item, BreadcrumbMenu } from 'components/organisms';
import { Content } from 'components/templates';
import { useItems } from './hooks';

const Items = () => {
	const { items, categories } = useItems();

	return (
		<Content>
			<BreadcrumbMenu categories={categories} />
			{items.map((item) => (
				<Link key={item.id} className="items__link" to={`/items/${item.id}`}>
					<Item item={item} />
				</Link>
			))}
		</Content>
	);
};

export default Items;
