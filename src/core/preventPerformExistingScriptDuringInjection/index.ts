import { REPLACEMENT_SOURCE_KEY } from 'debugConstants'

import VConsole from 'vconsole'

const PLUGIN_NAME = 'source_replacement'

const TAB_NAME = 'Source Replacement'

function preventPerformExistingScriptDuringInjection() {
	if (sessionStorage.getItem(REPLACEMENT_SOURCE_KEY)) {
		throw new Error(
			'The under of code block stop performing causing by replacement process is running',
		)
	} else {
		const Console: typeof VConsole = window['VConsole']

		const consoleInstance: VConsole = window['vConsole']

		if (Console && consoleInstance) {
			const plugin = new Console.VConsolePlugin(PLUGIN_NAME, TAB_NAME)

			plugin.on('renderTab', callback => {
				callback('<div>Click to Replacement button below</div>')
			})

			plugin.on('addTool', callback => {
				callback([
					{
						name: 'Replacement',
						onClick: () => {
							const targetSource = prompt('Input target replacement')

							sessionStorage.setItem(REPLACEMENT_SOURCE_KEY, targetSource!)

							location.reload()
						},
					},
				])
			})

			consoleInstance.addPlugin(plugin)
		}
	}
}

export default preventPerformExistingScriptDuringInjection
