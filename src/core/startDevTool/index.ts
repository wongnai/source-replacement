import replaceSourceWithTargetSource from 'core/replaceSourceWithTargetSource'
import ShakeDetector from 'shake-detector'

function startDevTool() {
    const shakeDetector = new ShakeDetector({})

    shakeDetector.subscribe(() => {
        replaceSourceWithTargetSource()

        shakeDetector.stop()
    }).start()
}

export default startDevTool
