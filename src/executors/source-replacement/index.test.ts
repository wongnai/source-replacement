describe('source-replacement', () => {
	const startReplacementProcessSpy = jest.fn()
	jest.doMock('core/startReplacementProcess', () => startReplacementProcessSpy)

	const loggerSpy = jest.fn()
	jest.doMock('utils/logger', () => loggerSpy)

	it('should perform start replacement process and warn log notify user not use this in production', async () => {
		await import('.')

		expect(startReplacementProcessSpy).toBeCalledTimes(1)

		expect(loggerSpy).toBeCalledTimes(1)
		expect(loggerSpy).toBeCalledWith(
			'"Source Replacement" script is running, remove this if this is production environment.',
			'warn',
		)
	})
})
