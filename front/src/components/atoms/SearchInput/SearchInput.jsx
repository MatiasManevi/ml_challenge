import React from 'react';

import './SearchInput.scss';

const SearchInput = ({ changeHandler, value }) => {
	return (
		<input
			onChange={changeHandler}
			className="search-input"
			type="text"
			value={value}
			placeholder="Nunca dejes de buscar"
		/>
	);
};

export default SearchInput;
