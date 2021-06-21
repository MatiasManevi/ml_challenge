import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useHistory } from 'react-router-dom';

import './BreadcrumbMenu.scss';
import { TextButton } from 'components/atoms';

const BreadcrumbMenu = ({ categories }) => {
	const history = useHistory();

	return (
		<div className="breadcrumb-menu">
			{categories.map((category, i) => {
				return (
					<React.Fragment key={category.id}>
						<TextButton
							clickHandler={() => {
								history.push(`/items?category=${category.id}`);
							}}
							text={category.name}
						/>
						{i !== categories.length - 1 && <ChevronRightIcon fontSize="small" />}
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default BreadcrumbMenu;
