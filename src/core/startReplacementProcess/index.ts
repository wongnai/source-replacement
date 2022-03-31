import consumeSourceTarget from 'utils/consumeSourceTarget'
import getSourceTarget from 'utils/getSourceTarget'
import isReplacedPage from 'utils/isReplacedPage'
import loadTargetSource from 'utils/loadTargetSource'
import logger from 'utils/logger'
import writeSourceToTargetPage from 'utils/writeSourceToTargetPage'

async function startReplacementProcess() {
	consumeSourceTarget()

	const sourceTarget = getSourceTarget()

	if (!sourceTarget) {
		logger('No replacement happen')

		return
	}

	if (isReplacedPage(sourceTarget)) {
		logger(`This page already replaced for ${sourceTarget}`)

		return
	}

	logger(`Start replacing process for ${sourceTarget}`)

	const source = await loadTargetSource(sourceTarget)

	writeSourceToTargetPage(source)

	logger(`Page replaced with ${sourceTarget}`)
}

export default startReplacementProcess
