import replaceSourceWithTargetSource from 'core/replaceSourceWithTargetSource'
import { REPLACEMENT_SOURCE_KEY } from 'debugConstants'
import ShakeDetector from 'shake-detector'
import isEmpty from 'lodash/isEmpty'

function startDevTool() {
    const shakeDetector = new ShakeDetector({})

    shakeDetector.subscribe(() => {
        const target = prompt('Input your target replacement source url or leave it blank if no replacement wanted')
        
        if (!isEmpty(target)) {
            sessionStorage.setItem(REPLACEMENT_SOURCE_KEY, target!)
        } else {
            sessionStorage.removeItem(REPLACEMENT_SOURCE_KEY)
        }

        location.reload()

        shakeDetector.stop()
    }).start()
}

export default startDevTool
