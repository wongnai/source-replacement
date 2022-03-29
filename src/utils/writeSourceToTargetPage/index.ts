function writeSourceToTargetPage(source: string) {
    window.stop()
    document.open()
    document.write(source)
    document.close()
}

export default writeSourceToTargetPage
