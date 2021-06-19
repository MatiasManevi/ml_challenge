import React from 'react';
import Grid from '@material-ui/core/Grid';

import './ItemDetail.scss';
import { Price, PrimaryButton } from 'components/atoms';
import { BreadcrumbMenu } from 'components/organisms';
import { Content } from 'components/templates';
import { useItemDetail } from './hooks';

const ItemDetail = ({ match }) => {
	const itemDetail = useItemDetail(match.params.id);

	if (!itemDetail) {
		return null;
	}

	const {
		picture,
		description,
		condition,
		sold_quantity,
		title,
		price,
		free_shipping
	} = itemDetail;

	return (
		<Content>
			<BreadcrumbMenu />
			<Grid container className="item-detail">
				<Grid item xs={9}>
					<img
						src={picture}
						alt={`imagen de ${title}`}
						className="item-detail__picture"
					/>
					<h3 className="item-detail__description-title">Descripción del producto</h3>
					<p className="item-detail__description-content">{description}</p>
				</Grid>

				<Grid item xs={10} sm={3}>
					<p className="item-detail__condition">
						{condition} - {sold_quantity} vendidos
					</p>
					<h1 className="item-detail__name">{title}</h1>
					<Price price={price} freeShipping={free_shipping} small={false} />
					<PrimaryButton text="Comprar" clickHandler={() => console.log('compra')} />
				</Grid>
			</Grid>
		</Content>
	);
};

export default ItemDetail;
