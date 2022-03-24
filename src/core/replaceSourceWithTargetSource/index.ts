import { REPLACEMENT_SOURCE_KEY } from 'debugConstants'
import getTargetSource from 'utils/getTargetSource'
import isReplacedPage from 'utils/isReplacedPage'
import loadTargetSource from 'utils/loadTargetSource'
import writeSourceToTargetPage from 'utils/writeSourceToTargetPage'

async function replaceSourceWithTargetSource() {
    const targetSource = getTargetSource()

    if (targetSource && !isReplacedPage(targetSource)) {
        console.log('Start replacing with ', targetSource)

        sessionStorage.setItem(REPLACEMENT_SOURCE_KEY, targetSource)

        let source = sessionStorage.getItem(targetSource)

        if (!source) {
            source = await loadTargetSource(targetSource)
        }

        sessionStorage.setItem(targetSource, source)

        writeSourceToTargetPage(source)
    }
}

export default replaceSourceWithTargetSource
