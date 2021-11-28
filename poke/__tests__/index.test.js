import { render, screen } from '@testing-library/react'
import Pokemons from '../pages/index'

describe('Index', () => {

	describe('Component', () => {
		it("it's rendered", () => {
			//render( -> On this way, we are calling 'screen' method. If we use only 'render', we will obtain only the elements of the rendered component and not full screen.
			const { getByTestId } = render(
				<Pokemons pokemons={[]}/>
			)

			//const paragraph = screen.getByTestId('tittle') -> using 'screen'
			const paragraph = getByTestId('tittle')
			expect(paragraph).toBeInTheDocument()
		})
	})

	describe('getStaticProps', () => {
	})
})
