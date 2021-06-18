import React from 'react';

import './SearchForm.scss';
import { SearchButton, SearchInput } from 'components/atoms';
import { useSearchForm } from 'components/molecules/SearchForm/hooks';

const SearchForm = () => {
	const { handleInputChange, handleSubmit, query } = useSearchForm();

	return (
		<form className="search-form">
			<SearchInput value={query} changeHandler={handleInputChange} />
			<SearchButton clickHandler={handleSubmit} />
		</form>
	);
};

export default SearchForm;
