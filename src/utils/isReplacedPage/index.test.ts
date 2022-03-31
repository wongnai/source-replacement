import isReplacedPage from '.'

describe('isReplacedPage()', () => {
	const MOCK_URL = 'https://src'

	it('should return false if no script', () => {
		expect(isReplacedPage(MOCK_URL)).toBe(false)
	})

	it('should return false if non of script start with target src', () => {
		const script = document.createElement('script')
		script.src = 'https://not'
		document.body.append(script)

		expect(isReplacedPage(MOCK_URL)).toBe(false)
	})

	it('should return true if some of script start with target src', () => {
		const script = document.createElement('script')
		script.src = MOCK_URL
		document.body.append(script)

		expect(isReplacedPage(MOCK_URL)).toBe(true)
	})
})
