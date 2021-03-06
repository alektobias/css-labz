import React, { useState, useEffect } from 'react';

import Box from '~/components/Box';
import Menu from '~/components/Menu';
import MenuColorPicker from '~/components/MenuColorPicker';
import MenuSlider from '~/components/MenuSlider';

import { Container, BoxContainer } from './styles';

export default function BoxShadow() {
	const [style, setStyle] = useState([]);
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [blur, setBlur] = useState(0);
	const [spread, setSpread] = useState(0);
	const [color, setColor] = useState('#000');

	// x, y, blur-radius | spread-radius | color

	useEffect(() => {
		setStyle([`box-shadow: ${x}px ${y}px ${blur}px ${spread}px ${color}; `]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [x, y, blur, spread, color]);

	return (
		<Container>
			<BoxContainer>
				<Box css={style} />
			</BoxContainer>
			<Menu>
				<MenuSlider label="Horizontal" defaultValue={x} setValue={setX} />
				<MenuSlider label="Vertical" defaultValue={y} setValue={setY} />
				<MenuSlider
					label="Blur"
					defaultValue={blur}
					setValue={setBlur}
					min={0}
				/>
				<MenuSlider
					label="Spread"
					defaultValue={spread}
					setValue={setSpread}
					min={-125}
				/>
				<MenuColorPicker
					label="Pick a color"
					defaultValue={color}
					setValue={setColor}
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
