import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '~/components/Header';
import Border from '~/pages/Border';
import BoxShadow from '~/pages/BoxShadow';
import Home from '~/pages/Home/index.';

import { Container } from './styles';

export default function routes() {
	return (
		<Container>
			<div>
				<Header />
				<Switch>
					<Route path="/border" component={Border} />
					<Route path="/box-shadow" component={BoxShadow} />
					<Route path="/" component={Home} exact />
				</Switch>
			</div>
		</Container>
	);
}
