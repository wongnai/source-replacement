import { REPLACEMENT_SOURCE_KEY } from 'debugConstants'

function getSourceTarget() {
	return sessionStorage.getItem(REPLACEMENT_SOURCE_KEY)
}

export default getSourceTarget
