import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 2rem 0;
`

export const Grid = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 8fr;
	gap: 1.2rem 1.2rem;

	@media (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 680px) {
		grid-template-columns: 1fr;
	}
`

export const Item = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

	h4 {
		color: #212121;
	}

	p {
		color: #707070;
	}
`

export const Content = styled.div``

export const FlexWrapper = styled.div`
	display: flex;
	flex-direction: row;
`

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`

export const PhotoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`
export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 1rem 0;
`

export const Stats = styled.div`
	display: flex;
	align-items: center;

	div {
		display: flex;
		&:first-child {
			margin-right: 0.5rem;
		}

		img {
			margin: 0;
		}

		span {
			color: #000;
			margin-left: 0.5rem;
		}
	}
`
