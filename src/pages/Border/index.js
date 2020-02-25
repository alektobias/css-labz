import React, { useState, useEffect } from 'react';

import { Slider } from '@material-ui/core';

import Box from '~/components/Box';

import { Container } from './styles';

export default function Border() {
	const [style, setStyle] = useState([]);
	const [bradius, setBradius] = useState(0);
	const [bwidth, setBwidth] = useState(1);

	useEffect(() => {
		setStyle([`border-radius: ${bradius}px;`, `border-width: ${bwidth}px;`]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [bradius, bwidth]);

	return (
		<Container>
			<Box css={style} />
			<div>
				<Slider
					valueLabelDisplay="auto"
					aria-label="pretto slider"
					defaultValue={bradius}
					onChange={(event, value) => setBradius(value)}
				/>
				<Slider
					valueLabelDisplay="auto"
					aria-label="pretto slider"
					defaultValue={bwidth}
					onChange={(event, value) => setBwidth(value)}
				/>

				<div>
					{style.map(s => (
						<p>{s}</p>
					))}
				</div>
			</div>
		</Container>
	);
}
