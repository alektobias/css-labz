import React, { useState, useEffect } from 'react';

import Box from '~/components/Box';
import { Container, BoxContainer } from '~/components/Layout';
import Menu from '~/components/Menu';
import MenuColorPicker from '~/components/MenuColorPicker';
import MenuRadio from '~/components/MenuRadio';
import MenuSlider from '~/components/MenuSlider';

export default function BoxShadow() {
	const [style, setStyle] = useState([]);
	const [width, setWidth] = useState(5);
	const [type, setType] = useState('solid');
	const [color, setColor] = useState('#000');
	const [radius, setRadius] = useState(0);

	// x, y, blur-radius | spread-radius | color

	useEffect(() => {
		setStyle([
			`border: ${width}px ${type} ${color};`,
			`border-radius: ${radius}px;`,
		]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [width, type, color, radius]);

	return (
		<Container>
			<BoxContainer>
				<Box css={style} />
			</BoxContainer>
			<Menu>
				<MenuColorPicker
					label="Pick a color"
					defaultValue={color}
					setValue={setColor}
				/>
				<MenuSlider
					label="Width"
					defaultValue={width}
					setValue={setWidth}
					min={0}
				/>
				<MenuRadio
					label="Style"
					defaultValue={type}
					setValue={setType}
					options={['solid', 'dashed', 'dotted', 'double']}
				/>
				<MenuSlider
					label="Radius"
					defaultValue={radius}
					setValue={setRadius}
					min={0}
					max={125}
				/>
				<code>
					{style.map(s => (
						<p>{s}</p>
					))}
				</code>
			</Menu>
		</Container>
	);
}
