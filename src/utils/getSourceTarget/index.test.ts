import getSourceTarget from '.'

describe('getSourceTarget()', () => {
	it('should return null no replacementTarget in hash and sessionStorage', () => {
		expect(getSourceTarget()).toBeNull()
	})

	it('should return value from sessionStorage if existed', () => {
		sessionStorage.setItem('targetReplacementSource', 'https://example-storage.com')

		expect(getSourceTarget()).toBe('https://example-storage.com')
	})
})
