import writeSourceToTargetPage from 'utils/writeSourceToTargetPage'

function placeLoadingPlaceholder() {
    const LOADING_PLACEHOLDER = '<html><body>LMWN Debugger Replacing In Progress...</body></html>'

    writeSourceToTargetPage(LOADING_PLACEHOLDER)
}

export default placeLoadingPlaceholder
