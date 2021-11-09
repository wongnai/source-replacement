describe('placeLoadingPlaceholder', () => {
    const writeSourceToTargetPageSpy = jest.fn()

    jest.doMock('utils/writeSourceToTargetPage', () => writeSourceToTargetPageSpy)

    it('should write loading source to target page', async () => {
        const { default: placeLoadingPlaceholder } = await import('.')

        placeLoadingPlaceholder()

        expect(writeSourceToTargetPageSpy).toBeCalledWith('<html><body>LMWN Debugger Replacing In Progress...</body></html>')
    })
})
