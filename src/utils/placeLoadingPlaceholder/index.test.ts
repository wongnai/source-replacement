describe('placeLoadingPlaceholder()', () => {
	const writeSourceToTargetPageSpy = jest.fn()

	jest.doMock('utils/writeSourceToTargetPage', () => writeSourceToTargetPageSpy)

	it('should write loading source to target page', async () => {
		const { default: placeLoadingPlaceholder } = await import('.')

		placeLoadingPlaceholder('http://example.com')

		expect(writeSourceToTargetPageSpy).toBeCalledWith(
			'<html><body><h1>LMWN Debugger Replacing In Progress...</h1><h2>Target Replacement is http://example.com</h2></body></html>',
		)
	})
})
