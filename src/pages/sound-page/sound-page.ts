window.addEventListener("load", main)

function main() {
	// Get the uuid from the url
	let path = window.location.pathname
	let parts = path.split("/")
	let uuid = parts[parts.length - 1]

	window.location.href = `universalsoundboard://sound/${uuid}`
}
