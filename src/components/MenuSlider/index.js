import React from 'react';

import { Slider } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function MenuSlider({
	label,
	defaultValue,
	setValue,
	min,
	max,
}) {
	return (
		<Container>
			<div>
				<strong>{label}</strong>
				<input
					value={defaultValue}
					type="number"
					onChange={e => setValue(e.target.value)}
				/>
			</div>
			<span>
				<Slider
					valueLabelDisplay="auto"
					defaultValue={defaultValue}
					min={min}
					max={max}
					onChange={(event, value) => setValue(value)}
				/>
			</span>
		</Container>
	);
}

MenuSlider.propTypes = {
	label: PropTypes.string.isRequired,
	defaultValue: PropTypes.number.isRequired,
	min: PropTypes.number,
	max: PropTypes.number,
	setValue: PropTypes.func.isRequired,
};
MenuSlider.defaultProps = {
	min: -250,
	max: 250,
};
