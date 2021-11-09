import getTargetSource from '.'

describe('getTargetSource', () => {
    it('should return null no replacementTarget in hash and sessionStorage', () => {
        expect(getTargetSource()).toBeNull()
    })

    it('should return value from replacementTarget in hash if existed', () => {
        Object.defineProperty(window, 'location', {
            value: {
                hash: '#replacementTarget=https%3A%2F%2Fexample.com',
            },
            writable: true,
        })
        expect(getTargetSource()).toBe('https://example.com')
    })

    it('should return value from sessionStorage if existed', () => {
        Object.defineProperty(window, 'location', {
            value: {
                hash: '',
            },
            writable: true,
        })

        sessionStorage.setItem('targetReplacementSource', 'https://example-storage.com')

        expect(getTargetSource()).toBe('https://example-storage.com')
    })
})
