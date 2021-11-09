import qs from 'qs'

import { REPLACEMENT_SOURCE_KEY } from 'debugConstants'

function getTargetSource() {
    try {
        const targetSource = qs.parse(location.hash.replace('#', '')).replacementTarget || sessionStorage.getItem(REPLACEMENT_SOURCE_KEY)

        return targetSource as string
    } catch {
        return null
    }
}

export default getTargetSource
