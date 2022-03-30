describe('startDevTool()', () => {
    let listenerSpy: Function

    const stopSpy = jest.fn()

    const startSpy = jest.fn()

    const subscribeSpy = jest.fn()

    class MockShakeDetector {
        subscribe = subscribeSpy.mockImplementation(listener => {
            listenerSpy = listener
    
            return this
        })

        stop = stopSpy

        start = startSpy
    }

    jest.doMock('shake-detector', () => MockShakeDetector)

    const replaceSourceWithTargetSourceSpy = jest.fn()
    jest.doMock('core/replaceSourceWithTargetSource', () => replaceSourceWithTargetSourceSpy)

    it('should perform start shake detector with bind listener to set target from prompt then perform source replacement and stop the shake detector', async () => {
        const { default: startDevTool } = await import('.')

        startDevTool()

        expect(subscribeSpy).toBeCalledTimes(1)

        expect(startSpy).toBeCalledTimes(1)

        expect(replaceSourceWithTargetSourceSpy).not.toBeCalled()

        expect(stopSpy).not.toBeCalled()

        listenerSpy()

        expect(stopSpy).toBeCalledTimes(1)
    })
})
