import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px;
	h1 {
		font-size: 48px;
		color: ${props => props.theme.colors.primary};
	}
	nav {
		margin-top: 20px;
		ul {
			display: flex;
			li {
				a {
					font-size: 18px;
					cursor: pointer;
					border-bottom: 1px solid transparent;
					transition: border 0.3s;
					padding: 10px 15px;
					:hover {
						border-bottom: 1px solid blue;
					}
				}
			}
		}
	}
`;
