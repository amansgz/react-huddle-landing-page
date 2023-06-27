import { createGlobalStyle } from 'styled-components'
import { COLORS, SIZES } from "./components/styles/values";

export const GlobalStyle = createGlobalStyle `
	*,
	*:before,
	*:after {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	body {
		max-width: 1440px;
		margin: auto;
		font-family: 'Open sans', sans-serif;
		line-height: 1.5;
	} 
	h2 {
		font-family: 'Poppins', sans-serif;
		font-size: ${SIZES.fs2};
		font-weight: 600;
		color: ${COLORS.neutral2};
		margin: .6em 0;
	}
	p {
		font-size: ${SIZES.fs3};
	}
	small {
		font-size: ${SIZES.fs4};
	}
	picture {
		display: block;
	}
	img {
		display: block;
		width: 100%;
		object-fit: cover;
	}
	ul {
		list-style-type: none;
	}
	li {
		margin-bottom: 1em;
	}
	a {
		text-decoration: none;
		color: #FFF;
	}
`;