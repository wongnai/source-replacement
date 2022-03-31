describe('startReplacementProcess()', () => {
	const MOCK_URL = 'http://example.com'

	const MOCK_SOURCE = '<h1>Test</h1>'

	const consumeSourceTargetSpy = jest.fn()
	jest.doMock('utils/consumeSourceTarget', () => consumeSourceTargetSpy)

	const getSourceTargetSpy = jest.fn()
	jest.doMock('utils/getSourceTarget', () => getSourceTargetSpy)

	const isReplacedPageSpy = jest.fn()
	jest.doMock('utils/isReplacedPage', () => isReplacedPageSpy)

	const loadTargetSourceSpy = jest.fn()
	jest.doMock('utils/loadTargetSource', () => loadTargetSourceSpy)

	const loggerSpy = jest.fn()
	jest.doMock('utils/logger', () => loggerSpy)

	const writeSourceToTargetPageSpy = jest.fn()
	jest.doMock('utils/writeSourceToTargetPage', () => writeSourceToTargetPageSpy)

	const { default: startReplacementProcess } = require('.') as typeof import('.')

	afterEach(() => {
		jest.clearAllMocks()
	})

	it('should consume source target and log no replacement happen if no source', async () => {
		getSourceTargetSpy.mockReturnValue(null)

		await startReplacementProcess()

		expect(consumeSourceTargetSpy).toBeCalledTimes(1)

		expect(loggerSpy).toBeCalledTimes(1)

		expect(loggerSpy).toBeCalledWith('No replacement happen')

		expect(isReplacedPageSpy).not.toBeCalled()

		expect(loadTargetSourceSpy).not.toBeCalled()

		expect(writeSourceToTargetPageSpy).not.toBeCalled()
	})

	it('should consume source target and log page already replaced if source target already existed in dom', async () => {
		getSourceTargetSpy.mockReturnValue(MOCK_URL)

		isReplacedPageSpy.mockReturnValue(true)

		await startReplacementProcess()

		expect(consumeSourceTargetSpy).toBeCalledTimes(1)

		expect(loggerSpy).toBeCalledTimes(1)

		expect(loggerSpy).toBeCalledWith('This page already replaced for http://example.com')

		expect(isReplacedPageSpy).toBeCalledTimes(1)

		expect(isReplacedPageSpy).toBeCalledWith(MOCK_URL)

		expect(loadTargetSourceSpy).not.toBeCalled()

		expect(writeSourceToTargetPageSpy).not.toBeCalled()
	})

	it('should consume source target and load source with write on page with notice user when process start and end', async () => {
		getSourceTargetSpy.mockReturnValue(MOCK_URL)

		loadTargetSourceSpy.mockReturnValue(MOCK_SOURCE)

		isReplacedPageSpy.mockReturnValue(false)

		await startReplacementProcess()

		expect(consumeSourceTargetSpy).toBeCalledTimes(1)

		expect(loggerSpy).toBeCalledTimes(2)

		expect(loggerSpy).nthCalledWith(1, 'Start replacing process for http://example.com')

		expect(loggerSpy).nthCalledWith(2, 'Page replaced with http://example.com')

		expect(isReplacedPageSpy).toBeCalledTimes(1)

		expect(isReplacedPageSpy).toBeCalledWith(MOCK_URL)

		expect(loadTargetSourceSpy).toBeCalledTimes(1)

		expect(loadTargetSourceSpy).toBeCalledWith(MOCK_URL)

		expect(writeSourceToTargetPageSpy).toBeCalledTimes(1)

		expect(writeSourceToTargetPageSpy).toBeCalledWith(MOCK_SOURCE)
	})
})
