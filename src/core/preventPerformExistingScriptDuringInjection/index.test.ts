import { REPLACEMENT_SOURCE_KEY } from 'debugConstants'
import preventPerformExistingScriptDuringInjection from '.'

describe('preventPerformExistingScriptDuringInjection', () => {
	const MOCK_URL = 'http://example.com'

	const promptSpy = jest.spyOn(global, 'prompt').mockReturnValue(MOCK_URL)

	Object.defineProperty(window, 'location', {
		value: {
			reload: jest.fn(),
		},
	})

	class VConsolePlugin {
		events: Record<string, any> = {}

		on = jest.fn().mockImplementation((key: string, handler: Function) => {
			const watcher = jest.fn()

			handler(watcher)

			this.events[key] = watcher.mock.calls[0][0]
		})
	}

	class FakeVConsole {
		static VConsolePlugin = VConsolePlugin

		plugins: VConsolePlugin[] = []

		addPlugin = jest.fn().mockImplementation(plugin => {
			this.plugins.push(plugin)
		})
	}

	window['VConsole'] = FakeVConsole

	window['vConsole'] = new FakeVConsole()

	afterEach(() => {
		jest.clearAllMocks()
		sessionStorage.clear()
	})

	it('should throw exception if app is marked from session that to be replaced', () => {
		sessionStorage.setItem(REPLACEMENT_SOURCE_KEY, MOCK_URL)

		expect(() => preventPerformExistingScriptDuringInjection()).toThrowError(
			new Error(
				'The under of code block stop performing causing by replacement process is running',
			),
		)
	})

	it('should init vconsole plugin for set source from prompt to session', () => {
		preventPerformExistingScriptDuringInjection()

		const plugin = window['vConsole'].plugins[0]

		expect(window['vConsole'].addPlugin).toBeCalledTimes(1)
		expect(window['vConsole'].addPlugin).toBeCalledWith(plugin)
		expect(plugin).toBeInstanceOf(VConsolePlugin)

		expect(plugin.events.renderTab).toBe('<div>Click to Replacement button below</div>')

		expect(plugin.events.addTool).toHaveLength(1)

		const addToolEvent = plugin.events.addTool[0]

		expect(addToolEvent.name).toBe('Replacement')

		addToolEvent.onClick()

		expect(promptSpy).toBeCalledTimes(1)
		expect(promptSpy).toBeCalledWith('Input target replacement')

		expect(sessionStorage.getItem(REPLACEMENT_SOURCE_KEY)).toBe(MOCK_URL)
		expect(location.reload).toBeCalledTimes(1)
	})
})
