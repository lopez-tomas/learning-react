import { render, screen } from '@testing-library/react'
import Pokemons from '../pages/index'

describe('Index', () => {

	describe('Component', () => {
		it("it's rendered", () => {
			//const { getByTestId } = render(
			//-> On this way, we are calling 'screen' method. If we use only 'render', we will obtain only the elements of the rendered component and not full screen.
			render( 
				<Pokemons pokemons={[{ name: 'Happy Piggy', url: '/pokemons/detail/1' }]}/>
			)

			const paragraph = screen.getByTestId('tittle') //-> using 'screen'
			//const paragraph = getByTestId('tittle')
			expect(paragraph).toBeInTheDocument()

			const piggy = screen.getByText('Happy Piggy')
			//console.log(piggy.getAttribute('href'))

			expect(piggy).toBeInTheDocument()
			const url = piggy.getAttribute('href')
			expect(url).toEqual('/pokemons/1')
		})
	})

	describe('getStaticProps', () => {
	})
})
