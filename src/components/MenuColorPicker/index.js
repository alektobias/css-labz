import React, { useState } from 'react';

import PropTypes from 'prop-types';
import ColorPicker from 'rc-color-picker';

import { Container } from './styles';

export default function MenuColorPicker({ label, defaultValue, setValue }) {
	const [hex, setHex] = useState(defaultValue);
	const [rgba, setRgba] = useState('rgba( 0, 0, 0, 1)');

	function hexToRgb(hex_color) {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex_color);
		return result
			? {
					r: parseInt(result[1], 16),
					g: parseInt(result[2], 16),
					b: parseInt(result[3], 16),
			  }
			: null;
	}

	function handlePick(colors) {
		const rgb = hexToRgb(colors.color);
		const color = `rgba(${rgb.r},${rgb.g},${rgb.b},${colors.alpha / 100})`;
		setRgba(color);
		setHex(colors.color);
		setValue(color);
	}

	return (
		<Container>
			<strong>{label}</strong>
			<ColorPicker
				color={defaultValue}
				onChange={handlePick}
				animation="slide-up"
			/>
			<strong>{hex}</strong>
			or
			<strong>{rgba}</strong>
		</Container>
	);
}

MenuColorPicker.propTypes = {
	label: PropTypes.string.isRequired,
	defaultValue: PropTypes.string.isRequired,
	setValue: PropTypes.func.isRequired,
};
