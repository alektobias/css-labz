import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Header() {
	return (
		<Container>
			<h1>CSS Labz</h1>
			<nav>
				<ul>
					<li>
						<Link to="/border">Border</Link>
					</li>
					<li>
						<Link to="/box-shadow">Shadow</Link>
					</li>
					<li>
						<Link to="/neomorphism">Neomorphism</Link>
					</li>
				</ul>
			</nav>
		</Container>
	);
}
