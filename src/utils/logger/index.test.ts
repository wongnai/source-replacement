import logger from '.'

describe('logger', () => {
	const warnSpy = jest.spyOn(console, 'warn')

	const logSpy = jest.spyOn(console, 'log')

	afterEach(() => {
		jest.clearAllMocks()
	})

	it('should perform log with prefix when logger called with message and level as log', () => {
		logger('test', 'log')

		expect(logSpy).toBeCalledWith('source-replacement: test')

		expect(warnSpy).not.toBeCalled()
	})

	it('should perform log with prefix when logger called with message without level', () => {
		logger('test')

		expect(logSpy).toBeCalledWith('source-replacement: test')

		expect(warnSpy).not.toBeCalled()
	})

	it('should perform warn with prefix when logger called with message and level as warn', () => {
		logger('test', 'warn')

		expect(warnSpy).toBeCalledWith('source-replacement: test')

		expect(logSpy).not.toBeCalled()
	})
})
