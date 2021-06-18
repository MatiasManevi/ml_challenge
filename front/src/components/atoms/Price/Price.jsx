import React from 'react';

import './Price.scss';

const Price = ({ price, small = true, freeShipping = false }) => {
	return (
		<div className="price">
			<p className={small ? 'price--small' : 'price--big'}>
				{price.currency} {price.amount}
				<sup
					className={
						'price__cents ' + (small ? 'price__cents--small' : 'price__cents--big')
					}
				>
					{price.decimals}
				</sup>
			</p>
			{freeShipping && <img className="price__shipping" src="ic_shipping.png" />}
		</div>
	);
};

export default Price;
