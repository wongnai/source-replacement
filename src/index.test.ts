describe('script', () => {
    const replaceSourceWithTargetSourceSpy = jest.fn()
    jest.doMock('core/replaceSourceWithTargetSource', () => replaceSourceWithTargetSourceSpy)

    const startDevToolSpy = jest.fn()
    jest.doMock('core/startDevTool', () => startDevToolSpy)

    it('should perform replace source with target source and start dev tool', async () => {
        await import('.')

        expect(replaceSourceWithTargetSourceSpy).toBeCalledTimes(1)
        expect(startDevToolSpy).toBeCalledTimes(1)
    })
})
