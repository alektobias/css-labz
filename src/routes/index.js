import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home/index.';

export default function routes() {
	return (
		<Switch>
			<Route path="/" component={Home} exact />
		</Switch>
	);
}
