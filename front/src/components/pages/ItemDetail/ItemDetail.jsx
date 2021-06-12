import React from 'react';
import Grid from '@material-ui/core/Grid';

import './ItemDetail.scss';
import { Price, PrimaryButton } from 'components/atoms';
import { BreadcrumbMenu } from 'components/organisms';
import { Content } from 'components/templates';

const ItemDetail = ({ match }) => {
	React.useEffect(() => {
		const id = match.params.id;
	}, []);

	return (
		<Content>
			<BreadcrumbMenu />
			<Grid container className="item-detail">
				<Grid item xs={9}>
					<img
						src="https://www.revistaneo.com/sites/default/files/2020-01/Mercado%20Libre%20dio%20a%20conocer%20los%20productos%20m%C3%A1s%20vendidos%20en%202019.jpg"
						alt="imagen detalle de producto"
						className="item-detail__picture"
					/>
					<h3 className="item-detail__description-title">Descripción del producto</h3>
					<p className="item-detail__description-content">
						In vehicula iaculis dolor quis tempor. Praesent vitae neque quis diam efficitur
						aliquet vel eu metus. Sed finibus lorem non efficitur dapibus. Ut sodales id
						nisl sed ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
						ullamcorper ultricies laoreet. Vivamus dignissim finibus erat, ac mattis nulla
						scelerisque id. Proin ornare arcu velit, quis aliquam lorem molestie id. Nulla
						mattis gravida metus, et bibendum tortor scelerisque vitae.
					</p>
				</Grid>

				<Grid item xs={10} sm={3}>
					<p className="item-detail__condition"> Nuevo - 24 vendidos</p>
					<h1 className="item-detail__name"> Deco Reverse Sombrero Oxford</h1>
					<Price price={'1.980,00'} small={false} />
					<PrimaryButton text="Comprar" clickHandler={() => console.log('compra')} />
				</Grid>
			</Grid>
		</Content>
	);
};

export default ItemDetail;
