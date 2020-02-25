import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Routes from '~/routes';
import GlobalStyle from '~/styles/global';

import main from './styles/theme/main';

function App() {
	return (
		<Router>
			<ThemeProvider theme={main}>
				<Routes />
				<GlobalStyle />
			</ThemeProvider>
		</Router>
	);
}

export default hot(App);
