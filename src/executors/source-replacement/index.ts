import startReplacementProcess from 'core/startReplacementProcess'

import logger from 'utils/logger'

logger(
	'"Source Replacement" script is running, remove this if this is production environment.',
	'warn',
)

startReplacementProcess()
