import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import './Header.scss';
import { Link } from 'react-router-dom';

import { SearchForm } from 'components/molecules';
import { Logo } from 'components/atoms';

const Header = () => {
	return (
		<div className="header">
			<Container>
				<Grid container justify="center">
					<Grid item xs={10}>
						<div className="header__content">
							<Link to="/">
								<Logo />
							</Link>
							<SearchForm />
						</div>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Header;
