import React from 'react';

const Price = ({ price, small = true, freeShipping = false }) => {
	return (
		<>
			<p className={small ? 'price--small' : 'price--big'}>$ {price}</p>
			{freeShipping && <img className="price__shipping" src="ic_shipping.png" />}
		</>
	);
};

export default Price;
