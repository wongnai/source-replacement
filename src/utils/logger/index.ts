const LOGGER_PREFIX = 'source-replacement: '

function logger(message: string, level: 'warn' | 'log' = 'log') {
	console[level](LOGGER_PREFIX + message)
}

export default logger
