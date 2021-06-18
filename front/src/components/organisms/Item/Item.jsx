import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './Item.scss';
import { Price } from 'components/atoms';

const Item = ({ item }) => {
	return (
		<Paper className="item">
			<img src={item.picture} alt="" className="item__thumbnail" />
			<div className="item__content">
				<div className="item__description">
					<Grid container alignItems="baseline">
						<Grid xs={10} item>
							<Price price={item.price} freeShipping={item.free_shipping} />
						</Grid>
						<Grid xs={2} item>
							<p className="item__place">{item.condition}</p>
						</Grid>
					</Grid>
				</div>
				<p className="item__title">{item.title}</p>
			</div>
		</Paper>
	);
};

export default Item;
