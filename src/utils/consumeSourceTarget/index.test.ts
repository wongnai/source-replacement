import { REPLACEMENT_SOURCE_KEY } from 'debugConstants'

describe('consumeSourceTarget', () => {
	const getReplacementTargetFromHashSpy = jest.fn()
	jest.doMock('utils/getReplacementTargetFromHash', () => getReplacementTargetFromHashSpy)

	const loggerSpy = jest.fn()
	jest.doMock('utils/logger', () => loggerSpy)

	const { default: consumeSourceTarget } = require('.') as typeof import('.')

	afterEach(() => {
		jest.clearAllMocks()
		sessionStorage.clear()
	})

	it('should perform set session storage at targetReplacementSource as value from hash then log for notice user', () => {
		const MOCK_URL = 'https://example.com'

		getReplacementTargetFromHashSpy.mockReturnValue(MOCK_URL)

		consumeSourceTarget()

		expect(sessionStorage.getItem(REPLACEMENT_SOURCE_KEY)).toBe(MOCK_URL)

		expect(loggerSpy).toBeCalledWith('Consuming new replacement target as https://example.com')
	})

	it('should perform nothing that touch on session storage and logger', () => {
		getReplacementTargetFromHashSpy.mockReturnValue(undefined)

		consumeSourceTarget()

		expect(sessionStorage.getItem(REPLACEMENT_SOURCE_KEY)).toBeNull()

		expect(loggerSpy).not.toBeCalled()
	})
})
