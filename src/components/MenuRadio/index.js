import React from 'react';

import { RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function MenuRadio({ label, defaultValue, setValue, options }) {
	return (
		<Container>
			<div>
				<strong>{label}</strong>
			</div>
			<RadioGroup
				defaultValue={defaultValue}
				onChange={e => setValue(e.target.value)}
			>
				{options.map(option => (
					<FormControlLabel
						value={option}
						control={<Radio color="primary" />}
						label={`${option.charAt(0).toUpperCase()}${option.slice(1)}`}
					/>
				))}
			</RadioGroup>
		</Container>
	);
}

MenuRadio.propTypes = {
	label: PropTypes.string.isRequired,
	defaultValue: PropTypes.string.isRequired,
	setValue: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
