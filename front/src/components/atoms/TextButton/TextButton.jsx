import React from 'react';

import './TextButton.scss';

const TextButton = ({ clickHandler, text }) => {
	return (
		<a onClick={clickHandler} className="text-button">
			{text}
		</a>
	);
};

export default TextButton;
