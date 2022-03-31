import { REPLACEMENT_SOURCE_KEY } from 'debugConstants'
import getReplacementTargetFromHash from 'utils/getReplacementTargetFromHash'
import logger from 'utils/logger'

function consumeSourceTarget() {
	const sourceTargetFromHash = getReplacementTargetFromHash()

	if (sourceTargetFromHash) {
		sessionStorage.setItem(REPLACEMENT_SOURCE_KEY, sourceTargetFromHash)

		logger(`Consuming new replacement target as ${sourceTargetFromHash}`)
	}
}

export default consumeSourceTarget
