import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import './BreadcrumbMenu.scss';
import { TextButton } from 'components/atoms';

const BreadcrumbMenu = () => {
	return (
		<div className="breadcrumb-menu">
			<TextButton text="Laptop" />
			<ChevronRightIcon fontSize="small" />
			<TextButton text="Lenovo" />
			<ChevronRightIcon fontSize="small" />
			<TextButton text="I7" />
		</div>
	);
};

export default BreadcrumbMenu;
