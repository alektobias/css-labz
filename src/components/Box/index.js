import styled from 'styled-components';

export default styled.div`
	height: 250px;
	width: 250px;
	border: 1px solid red;
	${props => props.css};
`;
