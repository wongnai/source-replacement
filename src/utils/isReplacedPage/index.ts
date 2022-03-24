function isReplacedPage(targetSource: string) {
    return [...document.getElementsByTagName('script')].some(script => script.src.startsWith(targetSource))
}

export default isReplacedPage
