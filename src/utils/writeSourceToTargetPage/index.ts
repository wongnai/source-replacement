function writeSourceToTargetPage(source: string) {
    document.open()
    document.write(source)
    document.close()
}

export default writeSourceToTargetPage
