import React from 'react';

import { Slider } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function MenuSlider({ label, defaultValue, setValue }) {
	return (
		<Container>
			<div>
				<strong>{label}</strong>
				<input value={defaultValue} onChange={e => setValue(e.target.value)} />
			</div>
			<Slider
				valueLabelDisplay="auto"
				defaultValue={defaultValue}
				onChange={(event, value) => setValue(value)}
			/>
		</Container>
	);
}

MenuSlider.propTypes = {
	label: PropTypes.string.isRequired,
	defaultValue: PropTypes.number.isRequired,
	setValue: PropTypes.func.isRequired,
};
