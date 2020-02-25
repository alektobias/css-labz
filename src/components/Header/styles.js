import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px;
	h1 {
		font-size: 48px;
	}
	nav {
		margin-top: 20px;
		ul {
			display: flex;
			li {
				font-size: 18px;
				padding: 10px 15px;
				cursor: pointer;
				border-bottom: 1px solid transparent;
				transition: border 0.3s;
				:hover {
					border-bottom: 1px solid blue;
				}
			}
		}
	}
`;
