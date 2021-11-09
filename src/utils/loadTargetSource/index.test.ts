describe('loadTargetSource', () => {
    const placeLoadingPlaceholderSpy = jest.fn()
    jest.doMock('utils/placeLoadingPlaceholder', () => placeLoadingPlaceholderSpy)

    it('should perform place loading and load source from target', async () => {
        const MOCK_SOURCE = '<html/>'
        const fetchSpy = jest.fn()
        Object.defineProperty(window, 'fetch', {
            value: fetchSpy.mockReturnValue({
                text: () => MOCK_SOURCE,
            })
        })

        const { default: loadTargetSource } = await import('.')

        const source = await loadTargetSource('https://example.com')

        expect(fetchSpy).toBeCalledWith('https://example.com')
        expect(placeLoadingPlaceholderSpy).toBeCalledTimes(1)
        expect(source).toEqual(MOCK_SOURCE)
    })
})
