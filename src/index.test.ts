describe('script', () => {
    const replaceSourceWithTargetSourceSpy = jest.fn()
    jest.doMock('core/replaceSourceWithTargetSource', () => replaceSourceWithTargetSourceSpy)

    it('should perform replace source with target source', async () => {
        await import('.')

        expect(replaceSourceWithTargetSourceSpy).toBeCalledTimes(1)
    })
})
