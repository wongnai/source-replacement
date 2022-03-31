import placeLoadingPlaceholder from 'utils/placeLoadingPlaceholder'

async function loadTargetSource(targetSourceUrl: string) {
	placeLoadingPlaceholder(targetSourceUrl)

	const response = await fetch(targetSourceUrl)

	return response.text()
}

export default loadTargetSource
