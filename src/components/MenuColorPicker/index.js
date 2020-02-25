import React from 'react';

import PropTypes from 'prop-types';
import ColorPicker from 'rc-color-picker';

import { Container } from './styles';

export default function MenuColorPicker({ label, defaultValue, setValue }) {
	function hexToRgb(hex) {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
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
		setValue(color);
	}

	return (
		<Container>
			<strong>{label}</strong>
			<div>{defaultValue}</div>
			<ColorPicker
				color={defaultValue}
				onChange={handlePick}
				animation="slide-up"
			/>
		</Container>
	);
}

MenuColorPicker.propTypes = {
	label: PropTypes.string.isRequired,
	defaultValue: PropTypes.string.isRequired,
	setValue: PropTypes.func.isRequired,
};
