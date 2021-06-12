import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import './Content.scss';

const Content = ({ children }) => {
	return (
		<div className="content">
			<Container>
				<Grid container justify="center">
					<Grid item xs={10}>
						{children}
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Content;
