import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
	> span {
		padding: 0 5px;
	}
	.MuiSlider-track {
		background: ${props => props.theme.colors.secondary};
	}
	.MuiSlider-rail {
		background: ${props => lighten(0.1, props.theme.colors.secondary)};
	}
	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		strong {
			color: ${props => props.theme.colors.secondary};
		}
		input {
			width: 50px;
			padding: 3px 5px;
			border-radius: 15px;
			border: none;
			color: ${props => props.theme.colors.secondary};
			border: 1px solid ${props => props.theme.colors.secondary};
		}
	}
`;
