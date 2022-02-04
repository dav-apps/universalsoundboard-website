window.addEventListener("load", main)

function main() {
	// Get the url params
	const urlParams = new URLSearchParams(window.location.search)
	let success = urlParams.get("success") == "true"
	let plan = +urlParams.get("plan")

	window.location.href = `universalsoundboard://upgrade?success=${success}&plan=${plan}`
}