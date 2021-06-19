import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import './BreadcrumbMenu.scss';
import { TextButton } from 'components/atoms';

const BreadcrumbMenu = ({ categories }) => {
	return (
		<div className="breadcrumb-menu">
			{categories.map((category, i) => {
				return (
					<React.Fragment key={category.id}>
						<TextButton text={category.name} />
						{i !== categories.length - 1 && <ChevronRightIcon fontSize="small" />}
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default BreadcrumbMenu;
