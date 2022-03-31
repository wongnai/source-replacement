import getReplacementTargetFromHash from '.'

describe('getReplacementTargetFromHash()', () => {
	it('should return undefined if no hash', () => {
		expect(getReplacementTargetFromHash()).toBeUndefined()
	})

	it('should return undefined if hash existed but no targetReplacementSource in hash', () => {
		location.hash = '#otherHash'

		expect(getReplacementTargetFromHash()).toBeUndefined()
	})

	it('should return url from targetReplacementSource in hash if existed', () => {
		location.hash = '#targetReplacementSource=https://example.com'

		expect(getReplacementTargetFromHash()).toBe('https://example.com')
	})
})
