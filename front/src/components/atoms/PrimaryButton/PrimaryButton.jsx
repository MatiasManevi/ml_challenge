import React from 'react';

import './PrimaryButton.scss';

const PrimaryButton = ({ text, clickHandler }) => {
	return (
		<button onClick={clickHandler} className="primary-button">
			{text}
		</button>
	);
};

export default PrimaryButton;
