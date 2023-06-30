import styled from 'styled-components'
import { COLORS } from "../../constants/values";

export const Wrapper = styled.div `
	background-color: ${COLORS.neutral1};
	background-image: url(../src/assets/bg-hero-mobile.svg);
	background-repeat: no repeat;
	background-size: cover;
	
	@media (min-width: 768px) {
		background-image: url(../src/assets/bg-hero-desktop.svg);
		background-size: cover;
		background-position: top center;
	}	
`;