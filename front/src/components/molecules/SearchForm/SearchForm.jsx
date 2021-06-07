import React from 'react';

import './SearchForm.scss';
import { SearchButton, SearchInput } from 'components/atoms';

const SearchForm = () => {
	return (
		<form className="search-form">
			<SearchInput changeHandler={(e) => console.log(e.target.value)} />
			<SearchButton clickHandler={() => console.log('clicked')} />
		</form>
	);
};

export default SearchForm;
