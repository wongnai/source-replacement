import { REPLACEMENT_SOURCE_KEY } from 'debugConstants'
import qs from 'qs'

function getReplacementTargetFromHash() {
	const { hash } = location

	if (!hash) {
		return undefined
	}

	return qs.parse(hash.replace('#', ''))[REPLACEMENT_SOURCE_KEY] as string | undefined
}

export default getReplacementTargetFromHash
