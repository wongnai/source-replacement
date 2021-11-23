import { REPLACED_KEY, REPLACEMENT_SOURCE_KEY } from 'debugConstants'
import getTargetSource from 'utils/getTargetSource'
import loadTargetSource from 'utils/loadTargetSource'
import writeSourceToTargetPage from 'utils/writeSourceToTargetPage'

async function replaceSourceWithTargetSource() {
    const targetSource = getTargetSource()

    if (targetSource && !sessionStorage.getItem(REPLACED_KEY)) {
        console.log('Start replacing with ', targetSource)

        sessionStorage.setItem(REPLACEMENT_SOURCE_KEY, targetSource)

        let source = sessionStorage.getItem(targetSource)

        if (!source) {
            source = await loadTargetSource(targetSource)
        }

        sessionStorage.setItem(targetSource, source)

        writeSourceToTargetPage(source)

        sessionStorage.setItem(REPLACED_KEY, 'true')
    }
}

export default replaceSourceWithTargetSource
