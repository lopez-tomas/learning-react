const add = () => 2 + 2

describe('Index', () => {

	describe('Component', () => {
		it("it's rendered", () => {

		})
	})

	describe('getStaticProps', () => {
		it('add 2 + 2', () => {
			expect(add()).toBe(4)
		})
	})
})
