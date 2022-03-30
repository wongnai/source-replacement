import writeSourceToTargetPage from 'utils/writeSourceToTargetPage'

function placeLoadingPlaceholder(target: string) {
    const LOADING_PLACEHOLDER = `<html><body><h1>LMWN Debugger Replacing In Progress...</h1><h2>Target Replacement is ${target}</h2></body></html>`

    writeSourceToTargetPage(LOADING_PLACEHOLDER)
}

export default placeLoadingPlaceholder
