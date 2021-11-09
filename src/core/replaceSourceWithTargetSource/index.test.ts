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

    it('should load and write target source and memorized target source in sessionStorage if target source is existed and wont load again if target source is loaded', async () => {
        const MOCK_TARGET = 'https://example.com'
        getTargetSourceSpy.mockReturnValue(MOCK_TARGET)

        const MOCK_SOURCE = '<html />'
        loadTargetSourceSpy.mockReturnValue(MOCK_SOURCE)

        await replaceSourceWithTargetSource()

        expect(getTargetSourceSpy).toBeCalledTimes(1)

        expect(loadTargetSourceSpy).toBeCalledWith(MOCK_TARGET)

        expect(writeSourceToTargetPageSpy).toBeCalledWith(MOCK_SOURCE)

        expect(sessionStorage.getItem(REPLACEMENT_SOURCE_KEY)).toBe(MOCK_TARGET)

        expect(sessionStorage.getItem(MOCK_TARGET)).toBe(MOCK_SOURCE)

        await replaceSourceWithTargetSource()

        expect(loadTargetSourceSpy).toBeCalledTimes(1)
    })

    it('should not load and write target source if target source is not existed', async () => {
        getTargetSourceSpy.mockReturnValue(null)

        await replaceSourceWithTargetSource()

        expect(getTargetSourceSpy).toBeCalledTimes(1)

        expect(loadTargetSourceSpy).not.toBeCalled()

        expect(writeSourceToTargetPageSpy).not.toBeCalled()
    })
})
