import { render, screen, waitFor } from '@testing-library/react'
import Poke from '../pages/poke'

describe('Poke', () => {
	it('pokemon rendering', async() => {
		const mockResults = [{ name: 'piggy', url: 'https://www.domain.com/pokemons/1' }]
		global.fetch = jest.fn()
			.mockImplementation(url => {
				return new Promise(resolve => {
					resolve({
						json: () => Promise.resolve({
							results: mockResults
						})
					})
				})
			})

		render(
			<Poke />
		)
		const loading = screen.getByText('Loading...')
		expect(loading).toBeInTheDocument()
		await waitFor(() => screen.getByText('My Pokémon APP'))
		const element = screen.getByTestId(1)
		const anchor = element.children[0]
		expect(anchor).toHaveAttribute('href', '/pokemons/1')
		expect(anchor).toHaveTextContent('piggy')
	})
})
