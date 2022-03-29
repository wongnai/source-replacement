import { REPLACEMENT_SOURCE_KEY } from 'debugConstants'
import * as replaceSourceWithTargetSourceType from '.'

describe('replaceSourceWithTargetSource', () => {
    const getTargetSourceSpy = jest.fn()
    jest.doMock('utils/getTargetSource', () => getTargetSourceSpy)

    const loadTargetSourceSpy = jest.fn()
    jest.doMock('utils/loadTargetSource', () => loadTargetSourceSpy)

    const writeSourceToTargetPageSpy = jest.fn()
    jest.doMock('utils/writeSourceToTargetPage', () => writeSourceToTargetPageSpy)

    const { default: replaceSourceWithTargetSource } = require('.') as typeof replaceSourceWithTargetSourceType

    afterEach(() => {
        sessionStorage.clear()
        jest.clearAllMocks()
    })

    it('should not load and write target source if target source is not existed', async () => {
        getTargetSourceSpy.mockReturnValue(null)

        await replaceSourceWithTargetSource()

        expect(getTargetSourceSpy).toBeCalledTimes(1)

        expect(loadTargetSourceSpy).not.toBeCalled()

        expect(writeSourceToTargetPageSpy).not.toBeCalled()
    })
})
