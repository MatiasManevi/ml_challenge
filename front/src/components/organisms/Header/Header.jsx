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
				<div className="header__content">
					<Grid container justify="center" spacing={4}>
						<Grid item>
							<Link to="/">
								<Logo />
							</Link>
						</Grid>
						<Grid item xs={9}>
							<SearchForm />
						</Grid>
					</Grid>
				</div>
			</Container>
		</div>
	);
};

export default Header;
