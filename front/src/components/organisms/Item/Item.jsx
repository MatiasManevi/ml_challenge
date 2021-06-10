import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './Item.scss';
import { Price } from 'components/atoms';

const Item = () => {
	return (
		<Paper className="item">
			<img
				src="https://www.revistaneo.com/sites/default/files/2020-01/Mercado%20Libre%20dio%20a%20conocer%20los%20productos%20m%C3%A1s%20vendidos%20en%202019.jpg"
				alt=""
				className="item__thumbnail"
			/>
			<div className="item__content">
				<div className="item__description">
					<Grid container alignItems="baseline">
						<Grid xs={10} item>
							<Price price={123} />
						</Grid>
						<Grid xs={2} item>
							<p className="item__place">Mendoza</p>
						</Grid>
					</Grid>
				</div>
				<p className="item__title">
					Apple Ipod Touch 5g 16 gb Negro Igual a Nuevo Completo Unico!
				</p>
			</div>
		</Paper>
	);
};

export default Item;
