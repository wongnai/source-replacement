import writeSourceToTargetPage from '.'

describe('writeSourceToTargetPage', () => {
	it('should open document for write source then close', () => {
		// @ts-ignore
		const openSpy = jest.spyOn(document, 'open').mockImplementation(() => {})
		const writeSpy = jest.spyOn(document, 'write').mockImplementation(() => {})
		const closeSpy = jest.spyOn(document, 'close').mockImplementation(() => {})

		const MOCK_SOURCE = '<html />'

		writeSourceToTargetPage(MOCK_SOURCE)

		expect(openSpy).toBeCalledTimes(1)
		expect(writeSpy).toBeCalledWith(MOCK_SOURCE)
		expect(closeSpy).toBeCalledTimes(1)
	})
})
