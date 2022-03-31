describe('code-blocker', () => {
	const preventPerformExistingScriptDuringInjectionSpy = jest.fn()
	jest.doMock(
		'core/preventPerformExistingScriptDuringInjection',
		() => preventPerformExistingScriptDuringInjectionSpy,
	)

	it('should prevent perform existing script', async () => {
		await import('.')

		expect(preventPerformExistingScriptDuringInjectionSpy).toBeCalledTimes(1)
	})
})
