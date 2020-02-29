import styled from 'styled-components';

export default styled.div`
	display: flex;
	flex-direction: column;
	border: 2px solid ${props => props.theme.colors.secondary};
	padding: 32px;
	min-width: 400px;
	height: 100%;
	border-radius: 4px;
	color: ${props => props.theme.colors.secondary};
	> * {
		margin-bottom: 16px;
	}
	i nput {
		text-align: right;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	code {
		margin-top: 32px;
	}
`;
