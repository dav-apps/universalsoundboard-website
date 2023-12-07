window.addEventListener("load", main)

function main() {
	// Get the url params
	const urlParams = new URLSearchParams(window.location.search)
	let success = urlParams.get("success") == "true"

	if (success) {
		window.location.href = `universalsoundboard://sound-promotion`
	}
}
